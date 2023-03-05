

const getAllTasks = (req,res) => {
    res.status(200).json({msg: `Getting All Tasks`})
}
const getSingleTask = (req,res) => {
    res.status(200).json({msg: `Getting ${req.params.id}`})
}
const createNewTask = (req,res) => {
    res.status(200).json({msg: `Creating New Task`})
}
const updateTask = (req,res) => {
    res.status(200).json({msg: `Updating Task`})
}

module.exports = {
    getSingleTask,
    createNewTask,
    getAllTasks,
    updateTask
}