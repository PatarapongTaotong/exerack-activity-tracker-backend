const mongoose = require('mongoose')
const { Schema, model } = mongoose
const StatusEnum = require('../../../common/enum/status.enum')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: Object.values(StatusEnum),
        default: StatusEnum.ACTIVE
    }
}, { timestamps: true, strict: true })

const UserModel = model('users', UserSchema)

module.exports = UserModel