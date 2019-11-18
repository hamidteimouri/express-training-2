var express = require('express');
var router = express.Router();
var CoinController = require('../../controller/CoinController');

// get all coins
router.get('/', CoinController.index);
router.get('/create', CoinController.index);

module.exports = router;


