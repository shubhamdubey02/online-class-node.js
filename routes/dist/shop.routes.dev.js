"use strict";

var path = require('path');

var rootDir = require('../util/path');

var express = require('express');

var router = express.Router();

var adminData = require('./admin.routes');

router.get('/', function (req, res, next) {
  res.render('shop'); // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
module.exports = router;