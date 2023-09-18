const router = require('express').Router();

let Todo = require('../models/todomodel');

router.route('/').get((req, res) => { // get list of todolist
    Todo.find()
      .then(todos => res.json(todos)) 
      .catch(err => res.status(400).json('Error: ' + err)); 
  });


router.route('/add').post((req,res) => { // add a new todolist
    const title = req.body.title;
    const content = req.body.content;

    const newTodo = new Todo({title, content});

    newTodo.save()
    .then(() => res.json("Task Added"))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;