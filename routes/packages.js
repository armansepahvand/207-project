// Created by Duncan
var express = require('express');
var router = express.Router();
const data = require('../models/mongoose_data');


/* GET home page. */
router.get('/', function(req, res, next) {
    let name=req.query.name;
    console.log(name);
    data.getPackage(name, (error, packages) => {
        if (error) return res.status(500).send('Error ' + error);
        // Get agents information 
        console.log(packages)
        res.render('packages',{ packages: packages });
        })
});  


module.exports = router;
