const UserSchema = require('../models/UserModel');
var jwt = require('jsonwebtoken');

module.exports = {
    get: async (req,res) => {
        console.log(req.body)
        const userInfo = req.body;
        const user = await UserSchema.findOne({
            userIPAdress: userInfo.ipAddress
        })
        if (user) {
            res.status(200).send(user)
        } else {
            const newUser = await UserSchema.collection.insertOne({
                userIPAdress : userInfo.ipAddress
            })
            res.status(201).send(newUser)
        }
    },
    put: async (req,res) => {

    },
    delete: async (req,res) => {
        
    }
}
