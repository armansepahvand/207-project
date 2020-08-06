var express = require('express');
var router = express.Router();
var data = require('../models/mongoose_data');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('logedinuser', { title: 'Express' });
});

// router.post('/', (req, res, next) => {
//   //console.log(JSON.stringify(req.body));
//   data.createUser(req.body, (err, message) => {
//     if (err) return res.status(500).send('Error ' + err);
//     res.send("<h2 style='margin:50px;text-align: center;'>" +
//       "Thank You for registering</h2>" +
//       "<script> setTimeout(()=>window.location='/', 2000)</script>");
//   });
// });

//Basel's work on User Update function
router.post('/', function(req,res,next){
    console.log(req.user);
    // data.updateUser(req.body, (err, message) => {
    //     if (err) return res.status(500).send('Error ' + err);
    //     res.send("<h2 style='margin:50px;text-align: center;'>" +
    //       "Thank You for registering</h2>" +
    //       "<script> setTimeout(()=>window.location='/', 2000)</script>");
    //   });
    res.send(req.user)
    
});

module.exports = router;
