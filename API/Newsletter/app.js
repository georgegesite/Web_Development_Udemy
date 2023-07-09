const express = require("express");
const bodyParser = require("body-parser")
const requrest = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const eMail = req.body.email;


    const data = {
        members: [{
            email_address: eMail,
            status: 'subscribed', // "subscribed" or "unsubscribed". defaults to subscribed if not provided
            merge_fields: {
                fname: firstName,
                lname: lastName,
            }
        }]
    }
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const url = 'https://us21.api.mailchimp.com/3.0/lists/087eca132c'
    const options = {
        method: "POST",
        auth: "georgedeveloper:2ed658003883d561ae72f3e57fb25a0b-us21",
    }
    const request = https.request(url, options, function (response) {

        if (response.statusCode == 200)
        {
            res.sendFile(__dirname + "/success.html")
        }
        else res.sendFile(__dirname + "/failure.html")
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();

})

app.post("/failure", function(res, req)
{
    res.redirect("/");
})
app.listen(3000, function () {
    console.log("server is running on port 3000");
})

// API KEY: 2ed658003883d561ae72f3e57fb25a0b-us21
// ID 087eca132c