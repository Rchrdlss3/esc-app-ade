require('dotenv').config();
const { ticketMasterURL } = require("../../helpers/constants")
async function createNewActivity() {
    
}
async function getActivities(postalCode) {
const ticketMasterResults = await fetch(`${ticketMasterURL}/discovery/v2/events?postalCode=${postalCode}&apikey=${process.env.TICKETMASTER_KEY}`)
const data = await ticketMasterResults.json()
console.log(data)
return data
}
module.exports = {createNewActivity,getActivities}