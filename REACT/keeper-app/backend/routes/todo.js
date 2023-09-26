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

//get a task by id
router.route('/:id').get((req, res) => {
  Todo.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

//add delete task
router.route("/:id").delete((req,res) => {
  Todo.findByIdAndDelete(req.params.id)
  .then(() => res.json('task deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;