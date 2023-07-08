const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
    
})
app.post("/",function(req,res)
{
    console.log("Working");
    const query = req.body.cityName
    const APIkey = "7998f1cba9e81c3f25c814057f77f5d8"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+APIkey+""
    https.get(url , function(response)
    {
        console.log(response.statusCode);
        response.on("data", function (data)
        {
           const weatherData =  JSON.parse(data);
           console.log(weatherData);

        //    const object = {
        //     name: "George",
        //     gender: "male"
        //    }
        //    const Object = JSON.stringify(object);
        //    console.log(Object);

            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            // console.log(temp);
            const imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1> The description of "+query+" is " + weatherDescription +".</h1>");
            res.write("<h1> The temperature of "+query+" is " + temp +" Kelvin.</h1>");
            res.write("<img src ="+ imageURL+ ">");
            res.send()
        })
    })
})

app.listen (3000, function (){
    console.log("server is running on port 3000");
})