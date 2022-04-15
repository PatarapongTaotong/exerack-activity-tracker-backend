const express = require('express')
const ActivityRouter = express.Router()
const ActivityController = require('./controllers/activity.controller')
const { checkToken } = require('../../middlewares/tokenizer.middleware')
const { createValidator } = require('express-joi-validation')
const CreateActivityDto = require('./dto/create-activity.dto')
const { PaginateActivitiesDto } = require('./dto/paginate-activities.dto')

const validator = createValidator({})

ActivityRouter.use(checkToken)
ActivityRouter.get('/', ActivityController.getAllActivities)
ActivityRouter.get('/:id', ActivityController.getActivityById)
ActivityRouter.post('/', validator.body(CreateActivityDto), ActivityController.createActivity)
ActivityRouter.patch('/:id', ActivityController.updateActivity)
ActivityRouter.delete('/:id', ActivityController.deleteActivity)
ActivityRouter.get('/:uid/user-id', validator.query(PaginateActivitiesDto), ActivityController.getAllActivitiesByUserId)

module.exports = ActivityRouter