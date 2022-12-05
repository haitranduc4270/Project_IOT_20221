var express = require('express');
var router = express.Router();
const config = require ('../services/config');

router.post('/connect-to-farm-gateway', config.connectToFarmGateway);
router.post('/config', config.changeConfig);

module.exports = router;
