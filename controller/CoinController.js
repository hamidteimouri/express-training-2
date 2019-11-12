var CoinModel = require('../model/Coin');

var coins = [];

CoinModel.find({}, function (err, result) {
    coins = result;
});
exports.getCoins = function (req, res, next) {


    //console.log('we are here');
    res.render('coin/index', {
        'coins': coins
    });
    // };

    /*
        console.log('we are in controller');
        CoinModel.findOne({asset: 'BTC'}, function (err, coin) {
            console.log(coin._id);
        });
        console.log('after query');
        */
    //return CoinModel.findOne()
    /*
    CoinModel.getAll({}, function (err, coins) {
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
    */
    //console.log(res);

};

// module.exports = getCoins;