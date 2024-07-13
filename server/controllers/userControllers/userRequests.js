const UserSchema = require('../../models/UserModel');
var jwt = require('jsonwebtoken');
const { createNewUser } = require('./userFunctions');

// Will need proper error handling implemented
module.exports = {
    get: async (req,res) => {
        const userInfo = req.body;
        const user = await UserSchema.findOne({
            userIPAddress: userInfo.ipAddress
        })
        if (user) {
            res.status(200).send(user)
        } else {
            const newUser = createNewUser(userInfo.ipAddress)
            res.status(201).send(newUser)
        }
    },
    put: async (req,res) => {
        const ipAddress = req.query.ipAddress
        const userRequest = req.body
        const updatedUser = await UserSchema.updateOne({userIPAddress: userRequest.userIPAddress},{$set:userRequest})
        res.status(200).send(updatedUser)
    },
    delete: async (req,res) => {
        const ipAddress = req.body.ipAddress
        UserSchema.deleteOne({
            userIPAddress: ipAddress
        })
    }
}
