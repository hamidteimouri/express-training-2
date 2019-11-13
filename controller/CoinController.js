var CoinModel = require('../model/Coin');


exports.store = function (req, res, next) {
    var coin = new CoinModel(
        {
            asset: req.asset,
            name_fa: req.name_fa,
        }, function (err, result) {
            if (err) return handleError(err);
            // object saved here
            res.send('Object saved successfully');
        });


};
exports.index = function (req, res, next) {
    CoinModel.find({}, function (err, result) {
        res.render('coin/index', {
            'coins': result
        });
    });
};

function handleError(err) {
    // do something
}