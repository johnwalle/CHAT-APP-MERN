const express = require("express")
const newMessage = require("../controller/message.controller")
const messageRouter = express.Router()


messageRouter.post('/send/:userID', newMessage)



module.exports = { messageRouter }