"use strict";

var path = require('path');

var express = require('express');

var app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

var adminData = require('./routes/admin.routes');

var shopRoutes = require('./routes/shop.routes');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);