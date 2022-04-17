// In this exercise we are going to practice how to write a REST API!
// The idea is to create an API for a to do list, which constists of tasks. The TaskService and model are already in place, now you just have to supplement the code down below.

// The TaskService has methods:
// 1. create(obj) 
// 2. update(id, data)
// 3. get(id)
// 4. list()
// 5. delete(id)

// For each CRUD operation, replace the <method> part with the correct method from the TaskService. Also, send the correct status code and send the body of the response. This should be in JSON format (hint: response.json(<body>) is the correct syntax!)

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
  TaskService.<method>
  .then((tasks) => {
    // if in here, all tasks are found, so you should set a status code 200
    // send the tasks you found in the response
  });
})

// read one
router.get('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  TaskService.<method>
  .then((task) => {
    // if in here, the specific task was found so you should set a status code 200
    // what should you send back as a response?
  })
  .catch((error) => {
    // if the task with this id does not exist, return a 404 Not found status code
    response.status(404);
    response.end();
  })
})

// update
router.put('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  const data = req.body;
  TaskService.<method>
  .then((task) => {
    // updating went well, so set a status code 200
    // send the updated task back in the response
  })
})

// post
router.post('/', async (req, res, next) => {
  const task = {
    name: req.body.name // the other fields have a default value
  }

  // try to create this new task in the database
  try {
    const taskSave = await TaskService.<method>;
    // if this went well, return 201 status code (a 201 status code indicates that a request was successful and as a result, a resource has been created)
    res.status(201);
    // send the successfully saved task back in the response
  }
  catch(error) {
    console.log(error);
  }
})

// delete
router.delete('/:taskid', (req, res, next) => {
  const id = req.params.taskid;
  TaskService.<method>
  .then((task) => {
    res.send(200); // operation went well, so sending status code 200
    // send the successfully deleted task back in the response
  })
  .catch((error) => {
    // if specific task does not exist
    res.status(404) // not found
    res.end();
  })
})

// error handling
router.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.end();
})