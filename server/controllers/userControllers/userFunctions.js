const { getLocation } = require('../../helpers/locationFunctions');
const UserSchema = require('../../models/UserModel');

async function createNewUser(ipAddress) {
    const userLocation = await getLocation(ipAddress)
    const newUser = await UserSchema.collection.insertOne({
        userIPAddress : ipAddress,
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        geoName: userLocation.location.geoname_id
    })
    return newUser
}

module.exports = {createNewUser}