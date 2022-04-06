const express = require('express')
const AppMiddleware = express()
const cors = require('cors')

AppMiddleware.use(cors())
AppMiddleware.use(express.json())
AppMiddleware.use(express.urlencoded({ extended: true }))

module.exports = AppMiddleware