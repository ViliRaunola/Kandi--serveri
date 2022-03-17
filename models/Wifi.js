const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let wifiSchema = new Schema({
    MAC_Address: {type: String},
    First_Seen: {type: String},
    Last_Seen: {type: String},
    Signal_Strength: {type: Number},
    ESSID: {type: String},
    BSSID: {type: Number},
    Probed_ESSID: {type: String},
    Is_AP: {type: Boolean},
},{timestamps: true});

module.exports = mongoose.model('Wifi', wifiSchema);