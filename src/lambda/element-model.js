const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const elementSchema = new Schema({
    title:{
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
    date:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    username:{
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 4
    },
    done:{
        type: Boolean,
        required: true,
        unique: false
    }
},{
    timestamps: true
})

const Element = mongoose.model('Element', elementSchema);

module.exports = Element;