const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin.routes');


router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        doctitle: 'shop'
    });
    // console.log(adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;