const express = require('express')
const AppRouter = express.Router()

const UserRouter = require('./modules/user/user.route')
const AuthRouter = require('./modules/auth/auth.router')
const ActivityRouter = require('./modules/activity/activity.route')

AppRouter.use('/', AuthRouter)
AppRouter.use('/users', UserRouter)
AppRouter.use('/activities', ActivityRouter)

module.exports = AppRouter