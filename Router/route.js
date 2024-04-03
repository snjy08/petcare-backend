const express = require('express')

const userController = require('../Controller/userController')

const petController = require('../Controller/petController')

const drController = require('../Controller/drController')

const router = new express.Router()

 //regsitration of users
router.post('/register',userController.register)

//login of users
router.post('/login',userController.login)

//get all pets
router.get('/allpets',petController.getAllPets)

//get particular pet
router.get('/pets/:id',petController.getParticularPet)

//get all doctors
router.get('/alldoctors',drController.getAllDoctors)

//get particular dr 
router.get('/doctors/:id',drController.getParticularDoctor)

//appoinment
router.post('/appointment/:id',drController.addAppoinment)


//get appointments
router.get('/allAppointments',drController.getAllAppointments)


router.post('/adminLogin',userController.adminLogin)
module.exports = router  
