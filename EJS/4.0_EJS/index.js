import express from "express.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.js", {
        dayType: "a weekday",
        advice: "it's time to work hard"
    });
})

app.listen(port, () => {
    console.log("Server running on port 3000");
})