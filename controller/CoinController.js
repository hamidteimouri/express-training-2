var CoinModel = require('../model/Coin');

var coins = [];

CoinModel.find({}, function (err, result) {
    coins = result;
});
exports.store = function (req, res, next) {

};
exports.index = function (req, res, next) {
    res.render('coin/index', {
        'coins': coins
    });
};