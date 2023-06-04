const express = require('express');
const mongoose = require('mongoose');
const Task = require('./models/task');
const taskRouter = require('./routes/tasks');
const methodOverride = require('method-override');
// mongoose.connect('mongodb://localhost/tasklist');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use(express.json());
app.set(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
  const tasks = await Task.find().sort({
    createdAt: 'desc',
  });
  res.render('tasks/index', { tasks: tasks });
});

app.use('/tasks', taskRouter);

app.listen(5000);
