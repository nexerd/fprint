var express = require('express');
var router = express.Router();
var orderController = require("../../controllers/orderController");

router.get('/orders', orderController.MobileUserOrders);

module.exports = router;
