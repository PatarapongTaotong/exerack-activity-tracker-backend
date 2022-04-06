const express = require('express')
const { checkToken } = require('../../middlewares/tokenizer.middleware')
const UserRouter = express.Router()
const UserController = require('./controllers/user.controller')

UserRouter.use(checkToken)
UserRouter.get('/', UserController.getAllUsers)
UserRouter.get('/:id', UserController.getUserById)
UserRouter.post('/', UserController.createUser)
UserRouter.patch('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)

module.exports = UserRouter
