const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//const password = 'mike';

const uri =
  `mongodb+srv://mike:mike@cluster0-xf25y.mongodb.net/task-app?retryWrites=true&w=majority` ||
  'mongodb://localhost:27017/tasks-app';

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB sucessfully ' + uri))
  .catch((error) => {
    console.log('Error has happend while attempting to connect to MongoDB');
    console.log(error);
  });

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = { mongoose };
