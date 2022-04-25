var express = require('express');
var router = express.Router();
const taskController = require('../../controllers/taskController');
const TaskService = taskController.TaskService;

router.use((req, res, next) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
    'Content-type': 'application/json'
  }
  res.set(headers);
  if (req.method == 'OPTIONS') {
    return res.status(200).end();
  }
  next();
})

// read all
router.get('/', (req, res, next) => {
  const tasks = TaskService.list();
  res.status(200);
  res.json(tasks);
})

// read one
router.get('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  const task = TaskService.get(id);
  if (task) {
    res.status(200);
    res.json(task);
  } else {
    res.status(404);
    res.end();
  }
})

// update
router.put('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  const data = req.body;
  const updatedTask = TaskService.update(id, data);
  if (updatedTask) {
    res.status(200);
    res.json(updatedTask)
  } else {
    res.status(404);
    res.end();
  }
})

// post
router.post('/', async (req, res, next) => {
  const task = {
    _id: req.body._id,
    name: req.body.name,
    createdDate: req.body.createdDate,
    status: req.body.status
  }

  const taskSave = TaskService.create(task);
  if (taskSave) {
    res.status(201);
    res.json(taskSave);
  } else {
    res.status(404);
    res.end();
  }
})

// delete
router.delete('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  const deletedTask = TaskService.delete(id);
  if (deletedTask) {
    res.status(200);
    res.json(deletedTask);
  } else {
    res.status(404);
    res.end();
  }
})

// error handling
router.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.end();
})
  
module.exports = router;