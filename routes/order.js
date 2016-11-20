var express = require('express');
var router = express.Router();
var orderController = require("../controllers/orderController");

router.get('/orders', orderController.UserOrders);

router.get('/make_order', orderController.MakeOrderView);

router.post('/make_order', orderController.MakeOrder);

module.exports = router;
