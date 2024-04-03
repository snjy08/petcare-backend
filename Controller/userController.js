const users = require('../Models/userSchema')

const jwt = require('jsonwebtoken')

//register
exports.register = async (req, res) => {
    console.log('register controller');

    const { username, email, password } = req.body

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(401).json('User already registered')
        }
        else {
            const newuser = new users({
                username, email, password
            })
            await newuser.save()
            res.status(200).json('User registration successfull')
        }
    }
    catch (err) {
        res.status(500).json('Something went wrong , please try again')
        console.log(err);
    }
}

//login
exports.login = async (req, res) => {
    console.log('login controller');

    const { email, password } = req.body

    try {
        //if check the email is alraedy in db-> user already registered
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            //token generation

            const token = jwt.sign({ userId: existingUser._id }, 'superkey2024')
            res.status(200).json({ existingUser, token })
        }
        //if the email is not present in db-> new user will save to the database
        else {
            res.status(404).json('user not registered yet')
        }

    }
    catch (err) {
        res.status(500).json('Something went wrong , please try again later')
        console.log(err);
    }
}


exports.adminLogin = async (req, res) => {


    const { email, password } = req.body

    try {

        const admin = await users.findOne({ email: "admin@gmail.com", password: "admin123" })
        if (email == admin.email && password == admin.password) {
            res.status(200).json('Admin Logged')
        }
    }
    catch (err) {
        res.status(500).json('Something went wrong , please try again later')
        console.log(err);
    }

}