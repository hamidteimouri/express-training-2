var CoinModel = require('../model/Coin');


exports.store = function (req, res, next) {
    /* this is for GET request */
    //var coin = new CoinModel({asset: req.query.asset, name_fa: req.query.name_fa});
    //coin.save();

    /* this is for POST request */
    var coin = new CoinModel({asset: req.body.asset, name_fa: req.body.name_fa});
    coin.save();

    /*res.send('Coin created successfully: ' + coin.asset);*/
    res.redirect('/api/coins')

};


exports.index = function (req, res, next) {
    CoinModel.find({}, function (err, result) {
        res.render('coin/index', {
            'coins': result
        });
    });
};
exports.create = function (req, res, next) {
    res.render('coin/create');
};


exports.edit = function (req, res, next) {
    var coin = CoinModel.findOne({asset: req.params.asset});
    coin.exec(function (err, result) {
        res.render('coin/edit', {
            coin: result
        });
    });
};

exports.update = function (req, res, next) {
    // var coin = CoinModel.findOneAndUpdate({asset: req.params.asset});
    var coin = CoinModel.findOneAndUpdate({asset: req.params.asset}, function (err, result) {
        res.send(result);
    });
    // coin.exec(function (err, result) {
    //     res.render('coin/edit', {
    //         coin: result
    //     });
    // });
    //console.log(coin);
};

function handleError(err) {
    console.log(err);
}