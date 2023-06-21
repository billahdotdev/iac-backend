const jwt = require('jsonwebtoken')
const User = require('../models/User')

verifyToken = (req, res, next) => {
    let token = req.session.token
    console.debug(req.session.token)

    if(!token) {
        return res.status(401).send({ message: 'Please login first!' })
    }

    jwt.verify(
        token,
        process.env.SECRET,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Unauthorized!' })
            }
            req.userId = decoded.id
            next()
        }
    )
}

module.exports = {
    verifyToken,
}