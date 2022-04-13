const UserService = require('../../user/services/user.service')
const dotenv = require('dotenv')
const md5 = require('md5')
const { createToken } = require('../../../middlewares/tokenizer.middleware')
dotenv.config()

const AuthController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await UserService.findByEmail(email)

            if (!user) {
                res.status(404).json({
                    "success": false,
                    "message": "user not found"
                })
            }

            if (user) {
                const valid = md5(`${password}${process.env.MD5_SALT}`) === user.password
                if (!valid) {
                    res.status(401).json({
                        "success": false,
                        "message": "password invalid"
                    })
                }

                if (valid) {
                    const token = createToken({
                        "id": user._id,
                        "email": user.email
                    })

                    res.status(200).json({
                        "success": true,
                        "data": token
                    })
                }
            }
        } catch (error) {
            res.status(500).json({
                "success": false,
                "message": `[Error on login]: ${error.message}`
            })
        }
    }
}

module.exports = AuthController