require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = 4000;

app.listen(port, () =>{
    console.log(`Server running on Port ${port}.`);
});

