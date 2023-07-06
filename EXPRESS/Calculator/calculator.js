//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res){
    var firstNUmber = Number(req.body.num1);
    var secondNumber = Number(req.body.num2);
    var sum  = firstNUmber + secondNumber;
    res.send(`the Sum is ${sum}`);
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`);
})
