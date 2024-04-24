const { Schema, model } = requrie('mongoose')

const messageSchema = Schema({
    senderID: {
        type: Schema.Types.objectId,
        ref: "User",
        required: true
    },
    receiverID: {
        type: Schema.Types.objectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true })


module.exports = model("Message", messageSchema)
