const express = require('express');
const connectDB = require('./config/db');
const { authRouter } = require("./routes/auth.routes.js");
require('dotenv').config();
require("colors");

const app = express();

// Parse JSON request body
app.use(express.json());

app.use('/api/auth', authRouter);

// Connect with the database
connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`.cyan);
});