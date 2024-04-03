//loads .env file into process.env
require('dotenv').config()////loads .env file into process.env by default

//import express
const express = require('express');

//import cors
const cors = require('cors');

const db = require('./DB/connection')

const router = require('./Router/route')

//create a backend application using express
const Server = express()

//use
Server.use(cors())
Server.use(express.json()) //Returns middleware that only parses 
//Server.use(appMiddleWare)

Server.use(router)

const PORT = 4000 || process.env.PORT

Server.listen(PORT,()=>{
    console.log(('listening on port' +PORT));
})

