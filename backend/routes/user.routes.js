const express = require('express')
const userRouter = express.Router()
const { getUsers } = require('../controller/user.controller');
const protectedRoute = require("../Middlewares/protectedRoute")

userRouter.get('/', protectedRoute, getUsers)



module.exports = { userRouter }