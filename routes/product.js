const express = require("express");
const multer = require("multer");
const router = express.Router();
const productController = require("../controller/productController");

const upload = multer({ storage: multer.memoryStorage() }); // Configure multer to use memory storage instead of upload to a folder as this goes into DB.

router.get("/get_products", productController.getProducts);
router.get("/get_product/:product_id", productController.getParticularProducts);
router.post("/buy_product", productController.boughtProduct);

// Use multer for multipart form data.
router.post("/add_product", upload.single('image'), (req, res, next) => {
  console.log("Request body:", req.body);
  console.log("Request file:", req.file);
  next(); // Pass control to the next middleware or controller.
}, productController.AddProducts); 


module.exports = router;

