const { Schema, model } = require("mongoose")

const conversationSchema = Schema({
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]

}, { timestamps: true })


module.exports = model('Conversation', conversationSchema)