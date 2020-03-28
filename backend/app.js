const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

const { mongoose } = require('./db/mongoose');
const { Task } = require('./db/models/task.model');

app.set('port', port);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get('/tasks/:id', (req, res) => {
  Task.findOne({ _id: req.params.id })
    .then((task) => res.send(task))
    .catch(() => {
      res.send({ message: 'could not find the recipe' });
    });
});

app.post('/tasks', (req, res) => {
  const task = {
    ...req.body,
    createdDate: new Date(Date.now()).toISOString(),
    completedDate: '',
    completed: false,
  };

  const newTask = new Task(task);
  newTask
    .save()
    .then((task) => res.send(task))
    .catch((error) => res.send(error));
});

app.put('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id == req.params.id);
  if (taskIndex !== -1) {
    const updateTask = req.body;
    tasks[taskIndex] = updateTask;

    return res.status(200).json({
      message: 'Task updated successully',
    });
  }

  res.status(404).json({
    message: 'Invalid Task Id',
  });
});

app.patch('/tasks/:id', (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((task) => res.send(task))
    .catch((error) => res.send(error));
});

app.delete('/tasks/:id', (req, res) => {
  Task.findOneAndRemove({
    _id: req.params.id,
  })
    .then((deletedRecipe) => res.send(deletedRecipe))
    .catch((error) => res.send(error));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
