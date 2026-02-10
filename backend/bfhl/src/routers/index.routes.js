const express = require('express');
const router = express.Router();
const bfhlController = require('../controller/bfhlController');
const validateRequest = require('../middleware/validateRequest');

router.post('/bfhl', validateRequest, bfhlController.handleBfhl);

module.exports = router;
