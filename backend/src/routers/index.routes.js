const express = require('express');
const router = express.Router();
const bfhlController = require('../controller/bfhlController');
const healthController = require('../controller/healthController');
const validateRequest = require('../middleware/validateRequest');

router.post('/bfhl', validateRequest, bfhlController.handleBfhl);
router.get('/health', healthController.getHealth);

module.exports = router;
