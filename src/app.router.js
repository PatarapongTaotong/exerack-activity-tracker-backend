const express = require('express')
const AppRouter = express.Router()

const UserRouter = require('./modules/user/user.route')
const AuthRouter = require('./modules/auth/auth.router')

AppRouter.use('/', AuthRouter)
AppRouter.use('/users', UserRouter)


module.exports = AppRouter