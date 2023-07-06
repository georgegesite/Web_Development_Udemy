//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function (req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function (req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var n  = weight / (height *height);
    res.send(`YOUR BMI is ${n}`);
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
})
