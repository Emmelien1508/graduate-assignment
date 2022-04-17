const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/taskModel'); //created model loading here
const bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var indexRouter = require('./routes/index');
const routes = require('./routes/api/taskRoute');

//register the route
routes(app);
indexRouter(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);