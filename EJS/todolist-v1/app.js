//jshint esversion:6

const express = require("express");
const bodyParser =require("body-parser");

const app = express();

app.get("/", function(req, res){ // request first, then response
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0) {
        // res.write("<h1> Yay its the weekend </h1>");
        // res.send();
        // res.sendFile(__dirname + "/index.html");
    } else {
        // res.write("<h1> It's not a weekend </h1>");
        // res.write("<h1> Boo i have to work </h1>");
        // res.send();
        res.sendFile(__dirname + "/index.html");
    }

    // res.send("Hello World");
    // res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function (){
    console.log("Server started on port 3000");
});