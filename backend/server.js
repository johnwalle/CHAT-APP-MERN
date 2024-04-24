const express = require('express');
const connectDB = require('./config/db')
const { authRouter } = require("./routes/auth.routes.js")
require('dotenv').config()
require("colors")

const app = express();
app.use('/api/auth', authRouter)
// connect with the data base

connectDB();



const port = process.env.PORT || 5000
app.listen(port, () => { console.log(`Server running on port ${port}`.cyan) })