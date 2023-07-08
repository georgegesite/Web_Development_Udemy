const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req,res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Manila,PH&appid=7998f1cba9e81c3f25c814057f77f5d8"
    https.get(url , function(response)
    {
        console.log(response.statusCode);
    })
    res.send("Server is up and running")
})
app.listen (3000, function (){
    console.log("server is running on port 3000");
})