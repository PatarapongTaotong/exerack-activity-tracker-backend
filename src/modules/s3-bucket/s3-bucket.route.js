const express = require('express')
const S3BucketRouter = express.Router()
const S3BucketController = require('./controller/s3-bucket.controller')

S3BucketRouter.get('/upload-url/:fileType', S3BucketController.generateUploadUrl)

module.exports = S3BucketRouter 