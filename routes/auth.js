const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

router.post("/signup_customer", authController.createCustomer);
router.post("/signup_retailer", authController.createRetailer);
router.post("/login", authController.loginUser);

module.exports = router;