const { IP_STACK_URL } = require('./functions')

async function getLocation (ipAddress) {
    try {
        const response = await fetch(IP_STACK_URL(ipAddress))
        if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }
        const json = await response.json()
        console.log(json)
    } catch (e) {
        console.error(e)
    }
}

module.exports = {getLocation}