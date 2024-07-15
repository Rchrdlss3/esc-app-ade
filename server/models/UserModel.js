const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = Schema({
    userIPAddress: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: false
    },
    latitude: {
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    },
    geoName : {
        type: String,
        required: false
    },
    postalCode : {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('UserSchema',UserSchema)