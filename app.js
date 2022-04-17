const express = require('express')
const app = express()

const AppConfig = require('./src/app.config')
const AppMiddleware = require('./src/app.middleware')
const AppRouter = require('./src/app.router')

app.use(AppConfig)
app.use(AppMiddleware)
app.use(AppRouter)

app.get('/', (req, res) => {
    res.status(200).json({
        "success": true,
        "currentTime": new Date()
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`MY REST API IS RUNNNING ON PORT ${PORT}`)
})

module.exports = app