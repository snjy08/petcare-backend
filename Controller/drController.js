const doctors = require('../Models/drSchema')
const appointments = require('../Models/appoinmentSchema')

exports.getAllDoctors = async (req, res) => {
    try {
        const allDoctors = await doctors.find()
        res.status(200).json(allDoctors)
    }
    catch (err) {
        res.status(404).json('something went wrong , please try again later')
        console.log(err);
    }
}

exports.getParticularDoctor = async (req, res) => {
    const doctorId = req.params.id
    try {
        const doctor = await doctors.findOne({ _id: doctorId })
        res.status(200).json(doctor)
    }
    catch (err) {
        res.status(404).json('something went wrong , please try again later')
        console.log(err);
    }
}

//appoinment
exports.addAppoinment = async (req, res) => {

    console.log('appoinment controller');

    const doctorId = req.params.id

    const { breed, dogOwner, phone, gender, procedure, date, time } = req.body
   
    try {
        const doctor = await doctors.findOne({ _id: doctorId })
        if (doctor) {
            const newAppointment = new appointments({
                doctorId, breed, dogOwner, phone, gender, procedure, date, time
            })
            await newAppointment.save()
            res.status(200).json('Appointment Succesfully Done')
        }
    }
    catch (err) {
        res.status(404).json('something went wrong , please try again later')
        console.log(err);
    }
}

//get all appointments

exports.getAllAppointments = async (req, res) => {
  
    try {
        const allAppointments = await appointments.find()
        res.status(200).json(allAppointments)
    }
    catch (err) {
        res.status(404).json('something went wrong , please try again later')
        console.log(err);
    }
}