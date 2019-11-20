var CoinModel = require('../model/Coin');


exports.store = function (req, res, next) {

    /*
    var coin = new CoinModel({asset: req.asset,name_fa: req.name_fa,
        }, function (err, result) {
            if (err) {
                res.send('err :' + err)
            }
            // object saved here
            res.send('Object saved successfully');
        }
    );
    */
    console.log(req);
    var coin = new CoinModel({asset: req.query.asset, name_fa: req.query.name_fa});
    coin.save();


    res.send('Object saved successfully2 : ' + coin.asset);

};


exports.index = function (req, res, next) {
    CoinModel.find({}, function (err, result) {
        res.render('coin/index', {
            'coins': result
        });
    });
};

function handleError(err) {
    console.log(err);
}