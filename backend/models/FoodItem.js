const mongoose = require('mongoose')
const { Schema } = mongoose

const FoodItemSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('FoodItem', FoodItemSchema)