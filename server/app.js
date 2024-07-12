require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express()
const userRoute = require('./routes/users')

app.listen(3001)
app.use('/user',userRoute)