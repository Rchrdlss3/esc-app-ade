const UserSchema = require('../models/UserModel');
var jwt = require('jsonwebtoken');

module.exports = {
    get: (req,res) => {
        const userInfo = req.body;
        const user = await UserSchema.findOne({})
        if (user) {
            res.status(200).send()
        } else {
        
            res.status(201).send(`New User created`)
        }
    }
}
