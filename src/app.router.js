const express = require('express')
const AppRouter = express.Router()

const UserRouter = require('./modules/user/user.route')
const AuthRouter = require('./modules/auth/auth.router')
const ActivityRouter = require('./modules/activity/activity.route')
const S3BucketRouter = require('./modules/s3-bucket/s3-bucket.route')

AppRouter.use('/', AuthRouter)
AppRouter.use('/users', UserRouter)
AppRouter.use('/activities', ActivityRouter)
AppRouter.use('/s3-bucket', S3BucketRouter)

module.exports = AppRouter