const Joi = require('joi')
const StatusEnum = require('../../../common/enum/status.enum')

const CreateActivityDto = Joi.object({
    userId: Joi.string().required(),
    activityType: Joi.string().required(),
    activityName: Joi.string().min(4).required(),
    icon: Joi.string().required(),
    activityDescription: Joi.string().min(10).required(),
    date: Joi.date().required(),
    duration: Joi.number().min(0).required(),
})

module.exports = CreateActivityDto