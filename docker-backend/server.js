//write server
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 4000

//connect to mongodb
mongoose.connect('mongodb://mongodb').then(() => {
    console.log('#######################################')
    console.log('Connect to MongoDB')
    console.log('#######################################')
}).catch(err => {
    console.log('#######################################')
    console.log(err)
    console.log('#######################################')
    process.exit(1)//quit the process
})

const commentsRoutes = require('./routes/comments')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))//form message
app.use(bodyParser.json())//using fetch with react
app.get('/', (req, res) => {
    res.send('Docker MERN Enviroment')
})
app.use('/comment', commentsRoutes)

app.listen(PORT, () => {
    console.log('#######################################')
    console.log('NodeJS and Express Started. =)')
    console.log('#######################################')
})