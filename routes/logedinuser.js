var express = require('express');
var router = express.Router();
var data = require('../models/mongoose_data');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('logedinuser', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  data.updateUser(req.body, (err, message) => {
    if (err) return res.status(500).send('Error ' + err);
    res.send("<h2 style='margin:50px;text-align: center;'>" +
      "Update was Successful</h2>" +
      "<script> setTimeout(()=>window.location='/', 2000)</script>");
  });
  res.render('logedinuser', { title: 'Express' });
});

module.exports = router;
