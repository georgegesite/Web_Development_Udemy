import express from 'express'
import axios from'axios'
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req,res) =>{
    res.render("index.ejs")
});

app.post("/submit", async (req, res) => {
    try {
    const category = req.body.answer;
      const result = await axios.get(`https://v2.jokeapi.dev/joke/${category}?type=single`);
      res.render("index.ejs", {
        theJoke: result.data.joke,
      });
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error.response.data);
      } else {
        console.log("An error occurred:", error.message);
      }
      res.status(500).send("An error occurred.");
    }
  });
  

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });