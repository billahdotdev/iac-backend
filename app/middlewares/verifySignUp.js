const User = require('../models/User')

checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const user = await User.findOne().or([
            { username: req.body.username },
            { email: req.body.email },
        ])

        if(!user) {
            return next()
        }

        if(user.username === req.body.username) {
            return res.status(422).send({ message: 'Username already in use' })
        } else if(user.email === req.body.email) {
            return res.status(422).send({ message: 'Email already in use' })
        }
    } catch(err) {
        console.debug(err.message, err)
        res.status(500).send({ message: 'Something went wrong!' })
    }
}

module.exports  = {
    checkDuplicateUsernameOrEmail
}