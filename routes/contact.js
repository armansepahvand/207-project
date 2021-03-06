// Created by Hui
var express = require('express');
var router = express.Router();
var data = require('../models/mongoose_data');

/* GET home page. */
router.get('/', function (req, res, next) {
  // Getting the agency information
  data.getContactData(null, (error, agencies) => {
    if (error) return res.status(500).send('Error ' + error);
    // Get agents information 
    var aID = req.query.agencyId;
    console.log(aID);
    data.getContactData(aID, (error, agents) => {
      res.render('contact',
        { agencies: agencies, agents: agents, aID: aID });
    })
  })
});

module.exports = router;
