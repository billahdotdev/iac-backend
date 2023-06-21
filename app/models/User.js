const { Schema, model } = require('mongoose')

module.exports = model('User', new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
}))