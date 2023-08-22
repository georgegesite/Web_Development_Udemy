const express = require('express');
const app = express();

app.set('view engine','ejs');


app.get("/", (req,res) =>{
    const student ={
        name: "Mohammad",
        age:"20" ,
        email : "mohammad@gmail.com",
    }
    res.render("Home.ejs",{student: student});
})

app.get("/about", (req,res) =>{
    res.render("about.ejs");
})
app.listen(4000);