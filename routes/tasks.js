const express = require('express');
const Task = require('./../models/task');
// const task = require('./../models/task');
const router = express.Router();
var app = express();

router.get('/new', (req, res) => {
  res.render('tasks/new', { task: new Task() });
});

router.get('/edit/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.render('tasks/edit', { task: task });
});

router.get('/:slug', async (req, res) => {
  // res.send(req.params.id);
  const task = await Task.findOne({ slug: req.params.slug });

  if (task == null) res.redirect('/');
  res.render('tasks/show', { task: task });
});

router.post(
  '/',
  async (req, res, next) => {
    // console.log(req.body);
    req.task = new Task();
    next();
  },
  saveTaskAndRedirect('new')
);

router.put(
  '/:id',
  async (req, res, next) => {
    // console.log(req.body);
    req.task = await task.findById(req.params.id);
    next();
  },
  saveTaskAndRedirect('edit')
);
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

function saveTaskAndRedirect(path) {
  return async (req, res) => {
    let task = req.task;
    task.name = req.body.name;
    task.description = req.body.description;
    task.priority = req.body.priority;
    task.duedate = req.body.duedate;

    try {
      task = await task.save();
      res.redirect(`/tasks/${task.slug}`);
    } catch (e) {
      res.render(`tasks/${path}`, { task: task });
    }
  };
}
module.exports = router;
