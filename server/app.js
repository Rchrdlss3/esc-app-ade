require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express()
const userRoute = require('./routes/users');
const { getLocation } = require('./helpers/locationFunctions');

async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected")
    } catch(e){
        res.status(500).send(internalError(e))
    }
}
app.listen(3001)
app.use(express.json())
app.use('/user',userRoute)

getLocation("134.201.250.155")
connect() 