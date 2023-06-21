const { Schema, model } = require('mongoose')

module.exports = model('Item', new Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    itemDescription: {
        type: String,
        required: true,
    },
    itemImage: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
}))