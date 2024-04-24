const express = require("express")
const newMessage = require("../controller/message.controller")
const protectedRoute = require("../Middlewares/protectedRoute")
const messageRouter = express.Router()


messageRouter.post('/send/:id', protectedRoute, newMessage)



module.exports = { messageRouter }