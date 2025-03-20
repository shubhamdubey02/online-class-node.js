"use strict";

var path = require('path');

var express = require('express');

var expressHbs = require('express-handlebars');

var bodyParser = require('body-parser');

var app = express();
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

var adminData = require('./routes/admin.routes');

var shopRoutes = require('./routes/shop.routes');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);
app.use(function (req, res, next) {
  res.status(404).render('404', {
    pageTitle: 'Page not Found'
  });
});
app.listen(2001);