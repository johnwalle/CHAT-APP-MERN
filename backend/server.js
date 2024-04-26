const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require("cookie-parser")
const cors = require("cors")
const { authRouter } = require("./routes/auth.routes.js");
const { messageRouter } = require('./routes/message.routes.js');
const { userRouter } = require('./routes/user.routes.js');
require('dotenv').config();
require("colors");

const app = express();

// Parse JSON request body
app.use(express.json());

// middlewares
app.use(cors());
app.use(cookieParser());
app.use('/api/auth', authRouter);
app.use('/api/messages', messageRouter);
app.use('/api/users', userRouter);

// Connect with the database
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`.cyan);
});