const express = require("express")
const { sendMessage, getMessages } = require("../controller/message.controller")
const protectedRoute = require("../Middlewares/protectedRoute")
const messageRouter = express.Router()


messageRouter.post('/send/:id', protectedRoute, sendMessage)
messageRouter.get('/:id', protectedRoute, getMessages)


module.exports = { messageRouter }