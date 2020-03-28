const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  priority: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
  deadlineDate: {
    type: String,
  },
  completedDate: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task };
