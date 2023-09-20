require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
async function connectToMongoDB() {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB database connection established successfully");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  }
connectToMongoDB(); // Connect to mongoDB

//Import Routers 
const todolistRouter = require('./routes/todo');

app.use('/todolist', todolistRouter);

//test router for fronted
//day 2 test



app.listen(port, () =>{
    console.log(`Server running on Port ${port}.`);
});

