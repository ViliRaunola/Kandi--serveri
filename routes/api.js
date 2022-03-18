const express = require('express');
const router = express.Router();
const Wifi = require('../models/Wifi')
const Bluetooth = require('../models/Bluetooth')

//Route for saving the data
router.post('/save', (req, res, next) => {
    const options = {upsert: true};

    //Saving the wifi data
    wifi_list = req.body.wifi;
    wifi_list.forEach(data => {
        Wifi.findOneAndUpdate({
        MAC_Address: data.MAC_Address}, 
        {
        First_Seen: data.First_Seen, 
        Last_Seen: data.Last_Seen,
        Signal_Strength: data.Signal_Strength,
        ESSID: data.ESSID,
        BSSID: data.BSSID,
        Probed_ESSID: data.Probed_ESSID,
        Is_AP: data.Is_AP
        }, 
        options, (err) => {
            if(err) {
                res.json({success: false});
                return err;
            }
        })
    })


    
    //Saving the bluetooth data
    bluetooth_list = req.body.bluetooth;
    bluetooth_list.forEach(data => {
        Bluetooth.findOne({MAC_Address: data.MAC_Address} ,(err, found) => {
            if(err){
                res.json({success: false});
                return err;
            }
            if(found){
                found.Last_Seen = data.Last_Seen;
                found.RSSI = data.RSSI;
                found.save(err => {
                    if(err){
                        res.json({success: false});
                        return err;
                    }  
                })
            }else{
                Bluetooth.create({
                    MAC_Address: data.MAC_Address,
                    Name: data.Name,
                    Company: data.Company,
                    First_Seen: data.Last_Seen,
                    Last_Seen: data.Last_Seen,
                    RSSI: data.RSSI_value,
                },
                (err) => {
                    if(err){
                        res.json({success: false});
                        return err;
                    }
                });
            }
        });
    })

    console.log('Saved data to databse')
    res.json({success: true})
})

router.get('/data', (req, res, next) => {
    bt_data = Bluetooth.find();
    wifi_data = Wifi.find();

    res.json({wifi: wifi_data, bt: bt_data})
})


module.exports = router;