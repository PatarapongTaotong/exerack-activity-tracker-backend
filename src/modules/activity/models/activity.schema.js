const mongoose = require('mongoose')
const { Schema, model } = mongoose
const StatusEnum = require('../../../common/enum/status.enum')
const mongoosePaginate = require('mongoose-paginate-v2')

const ActivitySchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    activityType: {
        type: String,
        required: true
    },
    activityName: {
        type: String,
        minlength: [4, 'Activity name should contain at least 4 characters'],
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    activityDescription: {
        type: String,
        minlength: [10, 'Activity description should contain at least 4 characters'],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        min: [0, 'Duration must be positive integer'],
        required: true
    },
    status: {
        type: String,
        enum: Object.values(StatusEnum),
        default: StatusEnum.ACTIVE
    }
}, { timestamps: true, strict: true })

ActivitySchema.plugin(mongoosePaginate)

const ActivityModel = model('activities', ActivitySchema)

module.exports = ActivityModel