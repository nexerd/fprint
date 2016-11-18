var express = require('express');
var router = express.Router();
var orderController = require("../controllers/printserviceController");

router.get("/printservices", orderController.AllPrintServies)

module.exports = router;