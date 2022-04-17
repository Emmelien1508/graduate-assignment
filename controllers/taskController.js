const Task = require('../models/taskModel');

class TaskService {
  static create(obj) {
    // creates a new task by saving it
    const task = new Task(obj);
    return task.save();
  }
  static update(id, data) {
    // finds task with given id
    return Task.findById(id)
    // saves the new data for that task
    .then((task) => {
      task.set(data);
      task.save();
      return task;
    })
  }
  static get(id) {
    // returns one task with given id
    return Task.findById(id) 
    .then((task) => {
      return task;
    })
  }
  static list() {
    // lists all tasks
    return Task.find({})
    .then((tasks) => {
      return tasks;
    })
  }
  static delete(id) {
    // removes one task with given id
    return Task.deleteOne({_id: id})
    .then((task) => {
      return task; 
    })
  }
}

module.exports.TaskService = TaskService;