//jshint esversion:6
// Uses cookies and sessions

//passport
//passport-local
//passport-local-mongoose
//express-session
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({ //code placement for this part is crucial, just below declerations and above mongoose connection
    secret: 'Our little secret.', //uses session
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true }
}));

app.use(passport.initialize()); //uses passport and initialize it
app.use(passport.session());

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/userDB', {useNewUrlParser: true});
}


const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("home.ejs")
});

app.get("/login", function (req, res) {
    res.render("login.ejs")
});

app.get("/register", function (req, res) {
    res.render("register.ejs")
});
app.get("/secrets", function(req,res){
    if (req.isAuthenticated())
    {
        res.render("secrets");
    }
    else{
        res.redirect("/login");
    }
});

app.get("/logout", function(req,res){ //logout user, deauthenticate and end session/cookies
req.logout(function(err){
    if(!err){
        res.redirect("/");
    }
    else{
        console.log(err);
    }
});

});


app.post("/register", async (req, res) => {
    User.register({
        username: req.body.username
    }, req.body.password, function (err, user) {
        if (!err) {
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secrets");
            })
        } else {
            console.log(err);
            res.redirect('/register')
        }
    });


});

app.post("/login", async (req, res) => {
    const user = new User ({
        username: req.body.username,
        password: req.body.password,
    })

    req.login(user, function(err)
    {
        if(!err ){                  //If there is no error then log the user in and redirect to secrets page
            passport.authenticate("local")(req, res, function () {
                res.redirect("/secrets");
            });
        } else {
            console.log(err);
        } 
    })
});

app.listen(3000, function () {
    console.log(`Server is running on port 3000`);
});