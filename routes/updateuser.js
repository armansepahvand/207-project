var express = require('express');
var router = express.Router();
var data = require('../models/mongoose_data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('logedinuser', { title: 'Express' });
});

//Basel's work on User Update function
router.post('/logedinuser', currentUser, function(req,res,next){
  Customers.findById(req.customer._id).then(function(customer){
      if(!currentUser){return res.sendStatus(401);}
      if(typeof req.body.customer.CustFirstName !== 'undefined'){
          customer.CustFirstName = req.body.customer.CustFirstName;
      }
      if(typeof req.body.customer.CustLastName !== 'undefined'){
          customer.CustLastName = req.body.customer.CustLastName;
      }
      if(typeof req.body.customer.CustAddress !== 'undefined'){
          customer.CustAddress = req.body.customer.CustAddress;
      }
      if(typeof req.body.customer.CustCity !== 'undefined'){
          customer.CustCity = req.body.customer.CustCity;
      }
      if(typeof req.body.customer.CustProv !== 'undefined'){
          customer.CustProv = req.body.customer.CustProv;
      }
      if(typeof req.body.customer.CustPostal !== 'undefined'){
          customer.CustPostal = req.body.customer.CustPostal;
      }
      if(typeof req.body.customer.CustHomePhone !== 'undefined'){
          customer.CustHomePhone = req.body.customer.CustHomePhone;
      }
     
      if(typeof req.body.customer.CustPassword !== 'undefined'){
          customer.setPassword(req.body.customer.CustPassword);
      }
      return customer.save().then(function(){
          return res.json({customer: customer.toAuthJSON()});
      });
  }).catch(next);
});

module.exports = router;
