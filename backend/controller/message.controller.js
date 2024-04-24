

const sendMessage = async (req, res) => {

    const { userID } = req.params
    try {
        return res.status(200).json({ message: `user ${userID} sent message.` })

    } catch (error) {

    }
}


module.exports = sendMessage