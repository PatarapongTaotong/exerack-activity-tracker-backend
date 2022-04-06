const express = require('express')
const ActivityRouter = express.Router()
const ActivityController = require('./controllers/activity.controller')

ActivityRouter.get('/', ActivityController.getAllUsers)
ActivityRouter.get('/:id', ActivityController.getUserById)
ActivityRouter.post('/', ActivityController.createUser)
ActivityRouter.patch('/:id', ActivityController.updateUser)
ActivityRouter.delete('/:id', ActivityController.deleteUser)

module.exports = ActivityRouter