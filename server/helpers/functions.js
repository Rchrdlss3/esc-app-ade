var parser = require('ua-parser-js')
var crypto = require('crypto')

function getDevice(req) {
    var userAgent = parser(req.headers['user-agent'])
    return userAgent.device
}

function IP_STACK_URL (ipAddress) {
    return `http://api.ipstack.com/${ipAddress}?access_key=${process.env.IPSTACK_KEY}`
}

function createSecret() {
    return crypto.randomBytes(32).toString('hex')
}
module.exports = {getDevice,IP_STACK_URL,createSecret}

