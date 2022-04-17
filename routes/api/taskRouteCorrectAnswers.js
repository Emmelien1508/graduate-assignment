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
  TaskService.list()
  .then((tasks) => {
    res.status(200);
    res.json(tasks);
  });
})

// read one
router.get('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  TaskService.get(id)
  .then((task) => {
    res.status(200);
    res.json(task);
  })
  .catch((error) => {
    response.status(404);
    response.end();
  })
})

// update
router.put('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  const data = req.body;
  TaskService.update(id, data)
  .then((task) => {
    res.status(200);
    res.json(task);
  })
})

// post
router.post('/', async (req, res, next) => {
  const task = {
    name: req.body.name
  }

  try {
    const taskSave = await TaskService.create(task);
    res.status(201);
    res.json(taskSave);
  } 
  catch(error) {
    console.log(error);  
  }
})

// delete
router.delete('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  TaskService.delete(id)
  .then((task) => {
    res.send(200);
    res.json(task);
  })
  .catch((error) => {
    res.status(404)
    res.end();
  })
})

// error handling
router.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.end();
})
  
module.exports = router;