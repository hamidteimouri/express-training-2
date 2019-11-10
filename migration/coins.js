var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoinSchema = new Schema({
    asset: {
        type: String,
        unique: true,
        required: true
    },
    name_fa: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
module.exports = CoinSchema;