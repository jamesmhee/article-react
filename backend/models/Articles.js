const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    body: {
        type: String,
        default: ''
    },
    like: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('Article', articleSchema)