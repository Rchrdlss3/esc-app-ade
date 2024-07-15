const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activitiesControllers/activitiesRequests');

router.get('/get',activitiesController.get)
router.put('/update',activitiesController.put)
module.exports = router