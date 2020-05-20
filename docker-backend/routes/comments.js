//routes fro comments
const express = require('express')
const app = express()
const router = express.Router()

//require mongoose model
const Comment = require('../models/Comment')

//get all
//localhost:4000/comment/comments
router.get('/comments', (req, res) => {
    Comment.find((err, comments) => {
        if(err) {
            console.log(err)
            res.status(500).json({
                code: 500,
                message: err
            })
        } else {
           res.json(comments) 
        }
    })
})

//Create
//localhost:4000/comment/
router.post('/', (req, res) => {
    // {
    //     message: 'Deixe o seu like!'
    // }
    const comment = new Comment(req.body)
    comment.save().then(comment => {
        res.status(200).json(comment)
    }).catch(err => {
        res.status(400).json({
            code: 400,
            message: err
        })
    })
})

module.exports = router