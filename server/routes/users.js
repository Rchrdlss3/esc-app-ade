const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers/userRequests');

router.get('/get',userController.get)
router.put('/update',userController.put)
module.exports = router