const express = require('express')
const mongoose = require('mongoose')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

//Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

app.get('/', (req,res) => {
    res.send('Qroll FTT !')
})

app.listen(PORT, HOST)