//jshint esversion:6
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

main().catch(err => console.log(err));
async function main() {
// await mongoose.connect('mongodb+srv://admin-george:fSYARUuqozvsbryD@cluster0.qncuahv.mongodb.net/blogDB', {useNewUrlParser: true}); //connect to database via cloud
await mongoose.connect('mongodb://127.0.0.1:27017/userDB', {useNewUrlParser: true}); 
}

const userSchema = new mongoose.Schema({ // new modified schema
    email: String,
    password: String,
});

// userSchema.plugin(encrypt, { secret: process.env.SECRET,  encryptedFields: ['password']}); // pluging using key and encryption

const User = new mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home.ejs")
});

app.get("/login", function (req, res) {
    res.render("login.ejs")
});

app.get("/register", function (req, res) {
    res.render("register.ejs")
});

app.post("/register", async (req, res) =>{

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        const newUser = new User({
            email:req.body.username, 
            password: hash  // using md5 to hash password
          });
          newUser.save().catch(err => console.log(err));
          res.render("secrets.ejs");
    });
});

app.post("/login", async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = await User.findOne({email:username}).catch(err => console.log(err));
    if(foundUser)
    {
        bcrypt.compare(password, foundUser.password, function(err, result) {
            // result == true
            if(result === true)
            {
                res.render("secrets.ejs");
                console.log("Login Sucessful");
            }
        });
        // if (foundUser.password === password);
    }
});

app.listen(3000, function () {
    console.log(`Server is running on port 3000`);
});