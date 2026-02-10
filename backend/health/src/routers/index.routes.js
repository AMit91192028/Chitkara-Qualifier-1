const express = require('express');
const router = express.Router();
const healthController = require('../controller/healthController');

router.get('/health', healthController.getHealth);

module.exports = router;
