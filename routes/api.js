var express = require('express');
var router = express.Router();
let db = require('../config/database');

var coins = db.collection('coins');


/* GET api listing. */
router.get('/coins', function (req, res, next) {
    res.json({
        coins: coins.toString(),
        status: 'API Its Working',
        message: 'Welcome to Laraman',
    });
});

module.exports = router;
