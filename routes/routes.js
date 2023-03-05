const express = require('express')
const router = express.Router()

const {getAllTasks,getSingleTask,createNewTask,updateTask, deleteTask} = require('../controllers/controllersTasks')

router.route('/').get(getAllTasks).post(createNewTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router