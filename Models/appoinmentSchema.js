const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({

    doctorId:{
        type:String,
        required:true 
    },
    breed:{
        type:String,
        required:true 
    }, 
    dogOwner:{
        type:String,
        required:true 
    },
    phone:{
        type:String,
        required:true 
    },
    gender:{
        type:String,
        required:true 
    },
    procedure:{
        type:String,
         required:true 
    },
    date:{
        type:String,
        required:true 
    },
    time:{
        type:String,
        required:true 
    }
})

const appointments = mongoose.model('appointments',appointmentSchema)
module.exports = appointments