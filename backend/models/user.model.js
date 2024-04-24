const { Schema, model } = require("mongoose")

const userSchema = Schema({
    fullName: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    },
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female']
    },
    profilePic: {
        type: String,
        default: ''
    }

})


module.exports = model('User', userSchema)
