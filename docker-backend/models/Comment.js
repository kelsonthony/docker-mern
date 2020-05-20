//Model for Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema for Comments
const CommentSchema = new Schema({
    message: {
        type: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
},
{
    collection: 'Comments'
})

module.exports = mongoose.model('Comment', CommentSchema)