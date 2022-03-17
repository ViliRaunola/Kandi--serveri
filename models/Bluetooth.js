const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let bluetoothSchema = new Schema({
    MAC_Address: {type: Number},
    Name: {type: String},
    Company: {type: String},
    First_Seen: {type: String},
    Last_Seen: {type: String},
    RSSI: {type: Number},
});

module.exports = mongoose.model('Bluetooth', bluetoothSchema);