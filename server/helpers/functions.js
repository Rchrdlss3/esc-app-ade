var parser = require('ua-parser-js')

function getDevice(req) {
    var userAgent = parser(req.headers['user-agent'])
    return userAgent.device
}

function IP_STACK_URL (ipAddress) {
    return `http://api.ipstack.com/${ipAddress}?access_key=${process.env.IPSTACK_KEY}`
}

module.exports = {getDevice,IP_STACK_URL}

