const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    description:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 0
    },
    price:{
        type: Number,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    imageLeader: {
        type: String,
        require: true,
        unique: false,
        trim: true,
    },
    category: {
        type: String,
        require: true,
    },
    recommended: {
        type: Boolean,
        require: true
    }
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;