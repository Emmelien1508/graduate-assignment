const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Enter the name of the to do task']
  },
  createdDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed'],
    default: 'pending'
  }
})

module.exports = mongoose.model("Task", schema);