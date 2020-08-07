// Created by Arman
var express = require('express');
var router = express.Router();
var data = require('../models/mongoose_data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { loginmsg: req.flash('error')} );
  console.log(currentUser);
});

router.post('/', (req, res, next) => {
  data.createBooking(req.body, (err, message) => {
    if (err) return res.status(500).send('Error ' + err);
    res.send("<h2 style='margin:50px;text-align: center;'>" +
      "Thank You for booking this package</h2>" +
      "<script> setTimeout(()=>window.location='/', 2000)</script>");
  });
});

module.exports = router;
