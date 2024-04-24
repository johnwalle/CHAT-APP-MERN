const { sign } = require("jsonwebtoken")

const signUpUser = async (req, res) => { 
    res.status(200).json({message: 'signup user'})
}


const loginUser = async (req, res) => { 
    res.status(200).json({message: 'Login user'})
}



const logoutUser = async (req, res) => { 
    res.status(200).json({message: 'logout user'})
}


module.exports = {
    loginUser,
    signUpUser,
    logoutUser
}