const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const loggedUserId = req.user._id;

        // Getting all users other than the logged-in user
        const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password");

        return res.status(200).json(allUsers);
    } catch (error) {
        console.error(error, 'Error while getting the users.');
        return res.status(500).json({ error: 'Internal server error.' });
    }
};

module.exports = { getUsers };