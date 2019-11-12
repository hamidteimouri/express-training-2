var mongoose = require('mongoose');
var coinSchema = require('../migration/coins.js');
var CoinModel = mongoose.model('Coin', coinSchema);

coinSchema.statics = {
    // cb : callback
    create: function (data, cb) {
        var coin = new this(data);
        coin.save(cb);
    },

    getAll: function (query, cb) {
        this.find(query)
    },

    getByName: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
};


module.exports = CoinModel;

