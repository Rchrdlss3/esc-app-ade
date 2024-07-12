const UserSchema = require('../models/UserModel');
var jwt = require('jsonwebtoken');
const getDevice = require('../helpers/functions')

module.exports = {
    get: async (req,res) => {
        const device  = getDevice(req)
        const userInfo = req.body;
        const user = await UserSchema.findOne({
            userIPAdress: userInfo.ipAddress
        })
        if (user) {
            res.status(200).send(user)
        } else {
            const newUser = await UserSchema.create({
                userIPAdress : userInfo.ipAddress
            })
            res.status(201).send(newUser)
        }
    }
}
