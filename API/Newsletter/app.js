const express = require("express");
const bodyParser = require("body-parser")
const requrest = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req,res)
{   
var firstName = req.body.fname;
var lastName = req.body.lname;
var eMail = req.body.email;

console.log(firstName, lastName, eMail);
})
app.listen (3000, function (){
    console.log("server is running on port 3000");
})