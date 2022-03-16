const express = require('express');
const router = express.Router();

router.post('/save', (req, res, next) => {
    console.log(req.body)
})


module.exports = router;