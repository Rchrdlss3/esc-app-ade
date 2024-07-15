const { getLocation } = require('../../helpers/locationFunctions');
const UserSchema = require('../../models/UserModel');

async function findUserByIP(ipAddress) {
    return await UserSchema.findOne({
        userIPAddress: ipAddress
    })
}

async function createNewUser(ipAddress) {
    const userLocation = await getLocation(ipAddress)
    console.log(userLocation)
    const newUser = await UserSchema.collection.insertOne({
        userIPAddress : ipAddress,
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        geoName: userLocation.location.geoname_id,
        postalCode: userLocation.zip
    })
    return findUserByIP(ipAddress)
}
async function updateUser(userRequest) {
    return await UserSchema.updateOne({userIPAddress: userRequest.userIPAddress},{$set:userRequest})
}
module.exports = {createNewUser,findUserByIP,updateUser}