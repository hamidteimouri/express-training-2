var express = require('express');
var router = express.Router();
let CoinController = require('../controller/CoinController');


/* GET api listing. */
router.get('/coins1', function (req, res, next) {
    res.json({
        coins: CoinController.getCoins(),
        //status: 'API Its Working',
        //message: 'Welcome to Laraman',
    });
});

module.exports = router;
