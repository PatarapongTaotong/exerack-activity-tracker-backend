const UserService = require('../services/user.service')
const StatusEnum = require('../../../common/enum/status.enum')
const dotenv = require('dotenv')
const md5 = require('md5')
dotenv.config()

const UserController = {
    createUser: async (req, res) => {
        try {
            const payload = req.body
            const { email ,password } = req.body

            const existedUser = await UserService.findByEmail(email)
            if (existedUser) {
                res.status(400).json({
                    "success": false,
                    "data": 'this email already been used'
                })
            } else {
                const encrytedPassword = md5(`${password}${process.env.MD5_SALT}`)
                const created = await UserService.create({ ...payload, password: encrytedPassword })

                res.status(201).json({
                    "success": true,
                    "data": created
                })
            }
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on create user]: ${error.message}`
            })
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const { username } = req.query
            let users = []

            if (username) {
                users = await UserService.getAll({ username, status: StatusEnum.ACTIVE })
            }

            if (!username) {
                users = await UserService.getAll()
            }
            
            res.status(200).json({
                "success": true,
                "data": users
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on get all users]: ${error.message}`
            })
        }
    },
    getUserById: async (req, res) => {
        try {
            const { id } = req.params
            
            const user = await UserService.getOneById(id)
            
            res.status(200).json({
                "success": true,
                "data": user
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on get one user]: ${error.message}`
            })
        }
    },
    updateUser: async (req, res) => {
        try {
            const payload = req.body
            const { id } =req.params

            const updated = await UserService.updateById(id, payload)

            res.status(200).json({
                "success": true,
                "data": updated
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on update one user]: ${error.message}`
            })
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { id } =req.params

            const deleted = await UserService.deleteById(id)

            res.status(200).json({
                "success": true,
                "data": deleted
            })
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on delete one user]: ${error.message}`
            })
        }
    }
}

module.exports = UserController