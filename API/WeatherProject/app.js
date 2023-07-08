const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Manila,PH&appid=7998f1cba9e81c3f25c814057f77f5d8"
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
            res.write("<h1> The description of Manila is " + weatherDescription +".</h1>");
            res.write("<h1> The temperature of Manila is " + temp +" Kelvin.</h1>");
            res.write("<img src ="+ imageURL+ ">");
            res.send()
        })
    })
  
})
app.listen (3000, function (){
    console.log("server is running on port 3000");
})