const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let tasks = [
  {
    id: 1,
    title: 'task #1',
    description: 'description for task #1',
    priority: 'normal',
    createdDate: '2019-05-30T12:42:19.000Z',
    deadlineDate: '',
    completedDate: '',
    completed: false,
  },
  {
    id: 2,
    title: 'task #2',
    description: 'description for task #2',
    priority: 'important',
    createdDate: '2019-07-30T12:42:19.000Z',
    deadlineDate: '2019-11-30T12:42:19.000Z',
    completedDate: '',
    completed: false,
  },
  {
    id: 3,
    title: 'task #3',
    description: 'description for task #3',
    priority: 'normal',
    createdDate: '2019-08-30T12:42:19.000Z',
    deadlineDate: '2020-11-30T12:42:19.000Z',
    completedDate: '',
    completed: false,
  },
  {
    id: 4,
    title: 'task #4',
    description: 'description for task #4',
    priority: 'very important',
    createdDate: '2019-06-30T12:42:19.000Z',
    deadlineDate: '2019-07-30T12:42:19.000Z',
    completedDate: '2019-06-30T12:42:19.000Z',
    completed: true,
  },
];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  res.status(200).send(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id == req.params.id);
  if (taskIndex !== -1) {
    return res.status(200).send(tasks[taskIndex]);
  }
  res.status(404).json({
    message: 'Invalid Task Id',
  });
});

app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push({
    ...task,
    id: tasks.length + 1,
    createdDate: new Date(Date.now()).toISOString(),
    completedDate: '',
    completed: false,
  });

  res.status(200).json({
    message: 'Task created successfully',
  });
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
  const taskIndex = tasks.findIndex((task) => task.id == req.params.id);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = req.body.completed;
    tasks[taskIndex].completedDate = new Date(Date.now()).toISOString();

    return res.status(200).send(tasks);
  }

  res.status(404).json({
    message: 'Invalid Task Id',
  });
});

app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex((task) => task.id == req.params.id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);

    return res.status(200).send(tasks);
  }
  res.status(404).json({
    message: 'Invalid Task Id',
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
