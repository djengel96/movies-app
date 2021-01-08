const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Shoe = new Schema(
    {
        name: { type: String, required: true },
        colors: { type: [String], required: true },
        image: { String },
        price: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('shoes', Shoe)
