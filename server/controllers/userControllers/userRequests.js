const UserSchema = require('../../models/UserModel');
var jwt = require('jsonwebtoken');
const { createNewUser, findUserByIP, updateUser } = require('./userFunctions');
const { createSecret } = require('../../helpers/functions');

// Will need proper error handling implemented
module.exports = {
    get: async (req,res) => {
        try {
            constUserIPAddress = req.query.ipAddress
            let status = 0;
            const secret = createSecret()
            let user = await findUserByIP(constUserIPAddress)
            if (user) {
                status = 200
            } else {
                user = await createNewUser(constUserIPAddress)
                status = 201
            }
            const unixExpiration = Date.now()+3600
            var token = jwt.sign(user.toJSON(),secret,{expiresIn:unixExpiration})
            res.status(status).send([user,token,unixExpiration])
        } catch (e) {
            res.status(500).send(e)
        }
    },

    put: async (req,res) => {
        try {
            const requestedUser = jwt.decode(req.headers.authorization);
            const ipAddress = req.query.ipAddress
            if (requestedUser.userIPAddress != ipAddress) {
                res.status(403)
            } else {
                const userRequest = req.body
                const updatedUser = await updateUser(userRequest)
                res.status(200).send(updatedUser)
            }
        } catch (e) {
            res.status(500).send(e)
        }
    },
    delete: async (req,res) => {
        try {
            const ipAddress = req.body.ipAddress
            UserSchema.deleteOne({
                userIPAddress: ipAddress
            })
        } catch (e) {
            res.status(500).send(e)
        }
    }
}
