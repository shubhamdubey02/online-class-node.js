"use strict";

var path = require('path');

var rootDir = require('../util/path');

var express = require('express');

var router = express.Router();

var adminData = require('./admin.routes');

router.get('/', function (req, res, next) {
  var products = adminData.products;
  res.render('shop', {
    prods: products,
    doctitle: 'shop'
  }); // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
module.exports = router;