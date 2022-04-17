require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const Task = require('./models/taskModel');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api/taskRouteCorrectAnswers');

// connect to db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb'); 

// init express
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set up routes and routers
app.use('/', indexRouter);
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/api/tasks', apiRouter);

// catch any remaining routing errors 
// error handler
app.use(function(error, request, response, next) {
    // set locals, only providing error in development
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};
  
    // render the error page
    response.status(error.status || 500);
    response.render('error');
});

module.exports = app;