const path = require('path');
const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin.routes')
const shopRoutes = require('./routes/shop.routes')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);