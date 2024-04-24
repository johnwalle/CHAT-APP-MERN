const User = require('../models/user.model');
const Message = require('../models/message.model');
const Conversation = require('../models/conversation.model');

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id } = req.params;
        const senderID = req.user._id;

        if (!message) {
            return res.status(400).json({ error: 'Please type something.' });
        }

        if (id.toString() === senderID.toString()) {
            return res
                .status(400)
                .json({ error: 'No chat between same users.' });
        }

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'Receiver not found.' });
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [senderID, id] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderID, id],
            });
        }

        const newMessage = await Message.create({
            senderID,
            receiverID: id,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            await conversation.save();
        }

        // SOCKET IO FUNCTIONALITY GOES HERE

        return res.status(200).json(newMessage);
    } catch (error) {
        console.error('Error while sending:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

const getMessages = async (req, res) => {

    try {
        const { id: userToChatId } = req.params
        const senderID = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderID, userToChatId] }
        }).populate("messages")

        return res.status(200).json(conversation.messages)

    } catch (error) {
        console.error(error, 'Error while getting messages.')
        return res.status(500).json({ error: 'Internal server error.' })
    }
}


module.exports = {
    sendMessage,
    getMessages
};