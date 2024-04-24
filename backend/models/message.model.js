const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        senderID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        receiverID: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = model('Message', messageSchema);