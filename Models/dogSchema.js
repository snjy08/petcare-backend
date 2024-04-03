const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
    breed:{
     type:String,
     required:true   
    },
    place:{
        type:String,
        required:true
    },
    lifespan:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    weight:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    temperament:{
        type:String,
        required:true
    }
})

const dogs = mongoose.model('dogs',dogSchema)
module.exports = dogs