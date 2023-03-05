const express = require('express')
const router = express.Router()

const {getAllTasks,getSingleTask,createNewTask,updateTask} = require('../controllers/controllersTasks')

router.get('/',getAllTasks)
router.get('/:id',getSingleTask)
router.post('/',createNewTask)
router.patch('/',updateTask)

module.exports = router