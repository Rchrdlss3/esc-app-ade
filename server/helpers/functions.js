var parser = require('ua-parser-js')

exports.getDevice = function(req) {
    var userAgent = parser(req.headers['user-agent'])
    return userAgent.device
}

// module.exports = {getDevice}