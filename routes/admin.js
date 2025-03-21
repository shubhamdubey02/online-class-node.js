const path = require('path');
const express = require('express');
const productcontrollers = require('../controllers/products')
const router = express.Router();

const products = [];
router.get('/add-product', productcontrollers.getAddProduct);

router.post('/add-product', productcontrollers.postAddProduct);

module.exports = router;