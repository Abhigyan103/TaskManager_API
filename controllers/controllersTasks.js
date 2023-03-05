const Task = require('../models/taskModel')

const getAllTasks = async (req,res) => {
    const resp = await Task.find({})
    res.status(200).json(resp)
}
const getSingleTask = async (req,res) => {
    try {
        const {id} = req.params
        const getTask = await Task.findOne({"_id":id})
        res.status(200).json(getTask)
    }catch(err) {
        res.status(500).json({msg: `Failed`})
    }
}
const createNewTask = async (req,res) => {
    try {
        const {taskName,completed} = req.body
        const newTask = await Task.create({taskName,completed})
        // const task = await newTask.save()
        res.status(201).json({msg: `Creating New Task : ${newTask}`})
    }catch(err) {
        res.status(500).json({msg: `Creation Failed`})
    }
    
}
const updateTask =async (req,res) => {
    try {
        const {id} = req.params
        const getTask = await Task.findOneAndUpdate({"_id":id},req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json(getTask)
    }catch(err) {
        res.status(500).json({msg: `Failed`})
    }
}
const deleteTask =async (req,res) => {
    try {
        const {id} = req.params
        const getTask = await Task.findOneAndDelete({"_id":id})
        res.status(200).json({msg: "Deleted"})
    }catch(err) {
        res.status(500).json({msg: `Failed`})
    }
}

module.exports = {
    getSingleTask,
    createNewTask,
    getAllTasks,
    updateTask,
    deleteTask
}