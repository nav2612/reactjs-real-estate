const express = require('express');
const router= express.Router();
const jwt= require('jsonwebtoken');
const key = "eoubouYBiycenauocbaonpicne";
const listing = require('../controllers/listingControllers.js');


router.use(function (req, res, next) {
    var token = req.headers["x-access-token"];
    if (token) {
      jwt.verify(token, key, function (err, decoded) {
        if (err) {
          return res.send({
            status: false,
            error: err,
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    }
  });

router.post('/createlist',listing.createList);

module.exports = router;