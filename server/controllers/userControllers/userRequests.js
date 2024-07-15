const UserSchema = require('../../models/UserModel');
var jwt = require('jsonwebtoken');
const { createNewUser, findUserByIP, updateUser } = require('./userFunctions');
const { createSecret } = require('../../helpers/functions');

// Will need proper error handling implemented
module.exports = {
    get: async (req,res) => {
        const userInfo = req.body;
        let status = 0;
        const secret = createSecret()
        let user = await findUserByIP(userInfo.ipAddress)
        if (user) {
            status = 200
        } else {
            user = await createNewUser(userInfo.ipAddress)
            status = 201
        }
        var token = jwt.sign(user.toJSON(),secret,{expiresIn:'1h'})
        res.status(status).send([user,token])
    },

    put: async (req,res) => {
        const requestedUser = jwt.decode(req.headers.authorization);
        const ipAddress = req.query.ipAddress
        if (requestedUser.userIPAddress != ipAddress) {
            res.status(403)
        } else {
            const userRequest = req.body
            const updatedUser = await updateUser(userRequest)
            res.status(200).send(updatedUser)
        }
    },
    delete: async (req,res) => {
        const ipAddress = req.body.ipAddress
        UserSchema.deleteOne({
            userIPAddress: ipAddress
        })
    }
}
