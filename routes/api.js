const express = require('express');
const router = express.Router();

//Route for saving the data
router.post('/save', (req, res, next) => {
    console.log(req.body)
})


module.exports = router;