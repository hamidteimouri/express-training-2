var express = require('express');
var router = express.Router();
var CoinController = require('../../controller/CoinController');

router.get('/', CoinController.getCoins);

/*
module.exports = function (router) {
    router.get('coins', CoinController.getCoins());
};
*/

module.exports = router;


