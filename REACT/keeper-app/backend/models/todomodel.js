const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,

    },
    content:{
        type: String,
        required: true,
    }
},
{
    timestamps: true, // timestapms to when created and modified
});

const todo = mongoose.model('Todo',todoSchema);
module.exports = todo;