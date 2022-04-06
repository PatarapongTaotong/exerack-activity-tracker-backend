const express = require('express')
const AppMiddleware = express()

AppMiddleware.use(express.json())
AppMiddleware.use(express.urlencoded({ extended: true }))

module.exports = AppMiddleware