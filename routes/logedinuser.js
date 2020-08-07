// Created by Basel
var express = require('express');
var router = express.Router();
var data = require('../models/mongoose_data');

/* GET home page. */
router.get('/', function(req, res, next) {
  let id=req.query.id;
  console.log(id);
  data.getBooking(id, (error, bookings) => {
      if (error) return res.status(500).send('Error ' + error);
      // Get agents information 
      console.log(bookings)
      res.render('logedinuser',{ bookings: bookings });
      })
});

// Update information from form and sends to success message before sending to index
router.post('/', function (req, res, next) {
  console.log(req.user);
  req.body._id=req.user._id;
  data.updateUser(req.body, (err, message) => {
     if (err) return res.status(500).send('Error ' + err);
     res.send("<h2 style='margin:50px;text-align: center;'>" +
      "Update was Successful</h2>" +
     "<script> setTimeout(()=>window.location='/', 2000)</script>");
  });
  
});

module.exports = router;
