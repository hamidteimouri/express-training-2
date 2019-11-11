var CoinModel = require('../model/Coin');

exports.getCoins = function (req, res, next) {
    console.log('before model');
    CoinModel.get({}, function (err, coins) {
        console.log(coins);
        if (err) {
            console.log('in err exception');
            res.json({
                error: err
            });
        }
        console.log('before response json');
        res.json({
            coins: coins
        });
    });

    console.log('after model');

};