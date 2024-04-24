const express = require('express');
const authRouter = express.Router();
const { loginUser, signUpUser, logoutUser } = require('../controller/auth.controller')


authRouter.post('/signup', signUpUser)
authRouter.post('/login', loginUser)
authRouter.post('/logout', logoutUser)


module.exports = { authRouter }