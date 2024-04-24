const User = require('../models/user.model')
const bcrypt = require("bcryptjs")
const generateTokenAndSetCookies = require('../utils/generateToken.js')

const signUpUser = async (req, res) => {
    try {
        const { username, fullName, password, confirmPassword, gender } = req.body;

        // Check if all fields are filled
        if (!username || !fullName || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: 'Please fill in all the fields.' });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match.' });
        }

        // Check if user already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: 'Username already taken.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Set profile picture based on gender
        const avatarMale = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const avatarFemale = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const profilePic = gender === 'male' ? avatarMale : avatarFemale;

        // Create new user
        const newUser = await User.create({
            fullName,
            username,
            gender,
            password: hashedPassword,
            profilePic,
        });


        await generateTokenAndSetCookies(newUser._id, res)
        res.status(200).json({
            id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic,
        });
    } catch (error) {
        console.error(error, 'Error while registering the user.'.red);
        return res.status(500).json({ error: 'Registration failed.' });
    }
};

const loginUser = async (req, res) => {

    const { username, password } = req.body
    try {
        // check if all fields are filled.
        if (!username || !password) {
            return res.status(400).json({ error: 'please fill all the fields.' })
        }

        const user = await User.findOne({ username })

        // check if the username is found 
        if (!user) {
            return res.status(400).json({ error: 'Invalid username.' })
        }

        // check if the passwords match

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ error: 'Invalid password.' })
        }

        generateTokenAndSetCookies(user._id, res)
        res.status(200).json({
            id: user._id,
            fullName: user.fullName,
            username: user.username,
            gender: user.gender,
            profilePic: user.profilePic,
        })
    } catch (error) {
        console.error(error, 'Error while the user login.')
        return res.status(500).json({ error: 'Login failed.' })
    }

}



const logoutUser = (req, res) => {

    try {
        res.cookie('jwt', '', { maxAge: 0 })
        res.status(200).json({ message: 'logout successfully.' })
    } catch (error) {
        console.error(error, 'Error while logout.')
        return res.status(500).json({ error: 'Internal server error.' })
    }

}


module.exports = {
    loginUser,
    signUpUser,
    logoutUser
}