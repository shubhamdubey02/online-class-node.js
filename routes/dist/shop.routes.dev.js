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
    pageTitle: 'Shop',
    path: '/'
  });
});
module.exports = router;