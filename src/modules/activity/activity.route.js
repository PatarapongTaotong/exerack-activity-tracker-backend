const express = require('express')
const ActivityRouter = express.Router()
const ActivityController = require('./controllers/activity.controller')

ActivityRouter.get('/', ActivityController.getAllActivities)
ActivityRouter.get('/:id', ActivityController.getActivityById)
ActivityRouter.post('/', ActivityController.createActivity)
ActivityRouter.patch('/:id', ActivityController.updateActivity)
ActivityRouter.delete('/:id', ActivityController.deleteActivity)
ActivityRouter.get('/:uid/user-id', ActivityController.getAllActivitiesByUserId)

module.exports = ActivityRouter