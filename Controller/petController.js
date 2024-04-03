
const dogs = require('../Models/dogSchema')

//get all pets
exports.getAllPets = async(req,res)=>{
    const searchKey = req.query.search
    console.log(searchKey)

    const query = {
        breed: {
             $regex: searchKey, $options: 'i'
        } 
   } 
try{ 
const allpets = await dogs.find(query)
res.status(200).json(allpets)
}
catch(err){
res.status(404).json('Something went wrong , Please try again later')
console.log(err);
}
}

//get a particular pet 
exports.getParticularPet = async(req,res)=>{
    const petId = req.params.id 
    try{
    const pet = await dogs.findOne({_id:petId}) 
    res.status(200).json(pet) 
    }
    catch(err){
        res.status(404).json('Something went wrong , Please try again later')
        console.log(err);
    }
}

