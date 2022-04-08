const express = require('express')
const AppMiddleware = express()
const cors = require('cors')
const HumpsCamelizeRequest = require('./middlewares/humps.middleware')

AppMiddleware.use(cors())
AppMiddleware.use(express.json())
AppMiddleware.use(express.urlencoded({ extended: true }))
AppMiddleware.use(HumpsCamelizeRequest)

module.exports = AppMiddleware