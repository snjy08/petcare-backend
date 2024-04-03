const mongoose = require('mongoose')
const drSchema = new mongoose.Schema({
    doctor:{
        type:String,
        required:true,
        unique:true
    },
    speciality:{
        type:String,
        required:true   
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    clinic_name:{
        type:String, 
        required:true 
    },
    location:{
        type:String, 
        required:true
    },
    working_days:{
        type:String,
        required:true
    },
    working_time:{
        type:String,
        required:true
    }
})

const doctors = mongoose.model('doctors',drSchema)
module.exports=doctors