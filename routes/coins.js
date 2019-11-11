var CoinController = require('../controller/CoinController');


module.exports = function (router) {
    router.post('coins.index', CoinController.getCoins());
};

