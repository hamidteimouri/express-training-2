var mongoose = require('mongoose');
var CoinSchema = require('../migration/coins.js');
var CoinModel = mongoose.model('Coin', CoinSchema);

// coinSchema.statics =

/*
coinSchema.statics = {
    // cb : callback
    create: function (data, cb) {
        var coin = new this(data);
        coin.save(cb);
        return true;
    },

    getAll: function (query, cb) {
        return this.find(query)
    },

    getByName: function (query, cb) {
        return this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        return this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function (query, cb) {
        return this.findOneAndDelete(query, cb);
    }
};
*/


module.exports = CoinModel;

