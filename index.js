//loads .env file into process.env
require('dotenv').config()////loads .env file into process.env by default

//import express
const express = require('express');

//import cors
const cors = require('cors');
const mongoose = require('mongoose')
const router = require('./Router/route')

//create a backend application using express
const Server = express()

//use
Server.use(cors())
Server.use(express.json()) //Returns middleware that only parses 
//Server.use(appMiddleWare)

Server.use(router)

const PORT = 4000 || process.env.PORT

mongoose.connect('mongodb+srv://snjy9096:luminar@cluster0.qcqukvd.mongodb.net/barkavenue?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    Server.listen(PORT, () => {
        console.log(`Server running at Port ${PORT}`);
        console.log('MongoDB connected successfully')
    })

}).catch((err) => {
    console.log(err);
})
