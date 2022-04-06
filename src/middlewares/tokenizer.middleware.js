const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const SECRET = process.env.JWT_SECRET

const createToken = (payload) => jwt.sign(payload, SECRET, { expiresIn: '7d' })

const checkToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1] || null
    const decoded = jwt.decode(token, SECRET)

    if (!token) {
        return res.status(401).json({
            "success": false,
            "message": "unauthorized"
        })
    }

    if (token && decoded.exp <= Date.now() / 1000) {
        return res.status(401).json({
            "success": false,
            "message": "token expored"
        })
    }

    next()
}

module.exports ={
    createToken,
    checkToken
}