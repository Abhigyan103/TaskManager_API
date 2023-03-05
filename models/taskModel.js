const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskName:String,
    completed:Boolean
})

module.exports = mongoose.model('AllTask', taskSchema)