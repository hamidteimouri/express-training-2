var CoinModel = require('../model/Coin');


exports.store = function (req, res, next) {
    var coin = new CoinModel(
        {
            asset: req.params.asset,
            name_fa: req.params.name_fa,
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