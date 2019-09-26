// Imports 
const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

// Constants
const PORT = 3000
const HOST = '0.0.0.0'

// App
const app = express()
app.use(express.json());
app.use(cors());


/*
// Database Docker
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')
*/


// Database
mongoose.connect('mongodb://localhost:27017/qroll', { useNewUrlParser: true } );

// Models
requireDir('./src/models');

// Route
app.use('/api',require('./src/routes'));

app.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`)
})