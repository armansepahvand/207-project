var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { loginmsg: req.flash('error'), data: req.user});
  console.log(data);
});

module.exports = router;
