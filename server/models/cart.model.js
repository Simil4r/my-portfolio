const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    items: {
        type: Array,
        required: true,
    }
},{
    timestamps: true
})

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;