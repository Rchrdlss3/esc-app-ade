require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express()
const userRoute = require('./routes/users');
const activitiesRoute = require('./routes/activities')

async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected")
    } catch(e){
        console.log(e)
    }
}
app.listen(80)
let corsOptions = {
    origin: ['http://localhost:3000','http://localhost:3001','https://escappadenow.com']
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/user',userRoute)
app.use('/activities',activitiesRoute)
// getLocation("134.201.250.155")
connect() 