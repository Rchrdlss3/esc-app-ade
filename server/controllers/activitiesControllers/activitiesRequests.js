const { getActivities } = require("./activitiesFunctions")

module.exports = {
    get: async (req,res) => {
        console.log(req.query.postalcode)
        const activities = await getActivities(req.query.postalcode)
        res.status(200).send(activities)
    },
    put: async (req,res) => {},
    delete: async (req,res) => {}
}