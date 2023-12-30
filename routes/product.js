import express from 'express';
import multer from 'multer';
const productRouter = express.Router();
import {getProducts,getParticularProducts,boughtProduct,AddProducts} from '../controller/productController.js';


const upload = multer({ storage: multer.memoryStorage() }); // Configure multer to use memory storage instead of upload to a folder as this goes into DB.

productRouter.get("/", getProducts);
productRouter.get("/get_product/:product_id",getParticularProducts);
productRouter.post("/buy_product", boughtProduct);

// Use multer for multipart form data.
productRouter.post("/add_product", upload.single('image'), (req, res, next) => {
  console.log("Request body:", req.body);
  console.log("Request file:", req.file);
  next(); // Pass control to the next middleware or controller.
}, AddProducts); 


export default productRouter;

