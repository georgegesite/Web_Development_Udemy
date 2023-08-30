//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todolistdb', {useNewUrlParser: true}); 
}

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const todoSchema = new mongoose.Schema({ // todolist schema
  name: {
    type: String,
    required: [true, 'Name Required']
  },
})

const workSchema = new mongoose.Schema({ // Worktodolist schema
  name: {
    type: String,
    required: [true, 'Name Required']
  },
})

const Todo = mongoose.model('todolist', todoSchema);
const WorkTodo = mongoose.model('worktodolist', workSchema)




var workItems = [];
async function requestWorkTask() {
  const tasks = await WorkTodo.find();
  tasks.forEach(function (task) {
    workItems.push(task.name);
    console.log(task.name);
  })
}
requestWorkTask();

var items = []; // get data from database
async function requestTask() {
  const tasks = await Todo.find();
  tasks.forEach(function (task) {
    items.push(task.name);
    console.log(task.name);
  })
}

requestTask();
app.get("/", function (req, res) {

  const day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function (req, res) {

  const item = req.body.newItem; // get item from input
  const newItem = new Todo({ // create object
    name: item,
  });
  items.push(newItem.name); // save into array
  newItem.save(); // insert into database
  console.log("Task Saved");
  res.redirect("/");

});

app.post("/delete", function (req, res) {

  console.log(req.body.checkbox);
  const deleteItem = req.body.checkbox
  async function deletePeople() {
    await Todo.deleteOne({
      name: deleteItem
    });
    console.log(`Sucessfully deleted ${deleteItem}`);
    res.redirect("/");
  }
  items = [];
  requestTask();
  deletePeople();


})


app.get("/work", function (req, res) {


  const item = req.body.newItem; // get item from input
  const newWorkItem = new WorkTodo({ // create object
    name: item,
  });
  workItems.push(newWorkItem.name); // save into array
  newWorkItem.save(); // insert into database
  console.log("Work Task Saved");
  res.redirect("/work");

  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});