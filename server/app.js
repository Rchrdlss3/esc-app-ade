require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const db = mongoose.connection;
const app = express()
const userRoute = require('./routes/users');
const { getLocation } = require('./helpers/locationFunctions');
const parser = require('ua-parser-js'); 
const PORT = 3001;

async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected")
    } catch (e) {
        res.status(500).send(internalError(e))
    }
}

app.get('/api/device-info', (req, res) => {
    const userAgent = parser(req.headers['user-agent']);
    const deviceInfo = {
        isMobile: userAgent.device.type === 'mobile',
    };
    res.json(deviceInfo);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
app.use(express.json())
app.use(cors());
app.use('/user', userRoute)

// getLocation("134.201.250.155")
connect() 