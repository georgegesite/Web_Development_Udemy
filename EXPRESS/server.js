//jshint esversion:6

const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get("/", function (req, res){
    res.send('<h1> Hello World! </h1>');
})

app.get("/services", function (req, res){
    res.send('<h1> Contact me at georgesite33@gmail.com</h1>');
})

app.get("/about", function (req, res){
    res.send('<h1>About Me</h1> <p> My name is George and I live in the States</p>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.listen(port, function(){
//     console.log("Server Started on port 3000");
// });