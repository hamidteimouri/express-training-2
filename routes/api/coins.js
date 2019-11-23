var express = require('express');
var router = express.Router();
var CoinController = require('../../controller/CoinController');

// get all coins
router.get('/', CoinController.index);

// show form
router.get('/create', CoinController.create);

// edit a coins
router.get('/:asset/edit', CoinController.edit);

// update a coins
router.post('/:asset/update', CoinController.update);

// store a coins
router.post('/create', CoinController.store);

module.exports = router;


