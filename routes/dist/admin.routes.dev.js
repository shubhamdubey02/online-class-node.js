"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../util/path');

var router = express.Router();
var products = [];
router.get('/add-product', function (req, res, next) {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
  });
});
router.post('/add-product', function (req, res, next) {
  // console.log(req.body);
  products.push({
    title: req.body.title
  });
  res.redirect('/');
});
exports.routes = router;
exports.products = products;