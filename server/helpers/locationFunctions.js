const { IP_STACK_URL } = require('./functions')

async function getLocation (ipAddress) {
    let location = {}
    try {
        const response = await fetch(IP_STACK_URL(ipAddress))
        if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }
        const json = await response.json()
        location = json
    } catch (e) {
        console.error(e)
    } 
    return location
}

module.exports = {getLocation}