const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    orderItems: {
        type: Array,
        default: []
    },
    totalAmount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Order', OrderSchema)
