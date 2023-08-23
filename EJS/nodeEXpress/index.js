const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) =>{
    res.render("Home.ejs");
})

app.get("/about", (req,res) =>{
    res.render("about.ejs");
})

let bowl = ["Apples", "Oranges", "Peers"];

app.get("/fruits", (req, res) =>{
    res.render("fruits.ejs", {fruits: bowl});
})


app.get("/validparenthesis", (req,res) =>{
    res.render("validparenthesis.ejs")
});
app.post("/validparenthesissubmit", (req, res) => {
    var s = req.body["string"];
    var aanswer = isValid(s);
    if(aanswer == true)
    var answer = "TRUE"
    else
    var answer = "FALSE"
    res.render("validparenthesis.ejs", { FinalAnswer: answer, sstring: s });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });


var isValid = function(s) {
    const hashmap = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    const stack = [];

    if (s === "" || s.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] in hashmap) {
            stack.push(s[i]);
        } else {
            let topElement = stack.pop();
            if (hashmap[topElement] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};