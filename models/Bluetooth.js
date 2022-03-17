const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let bluetoothSchema = new Schema({
    MAC_Address: {type: String},
    Name: {type: String},
    Company: {type: String},
    First_Seen: {type: String},
    Last_Seen: {type: String},
    RSSI: {type: Number},
},{timestamps: true});

module.exports = mongoose.model('Bluetooth', bluetoothSchema);