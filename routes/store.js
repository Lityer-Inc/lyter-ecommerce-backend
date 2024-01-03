import { getStores,getSpecificStore,getStoreProducts,addStoreProduct,getSpecificStoreProduct,deleteStore,deleteProduct,updateProductController,updateStoreController } from "../controller/storeController.js";
import express from "express"
import {AddStore} from '../controller/storeController.js';
import { authentication } from "../middleWare/authentication.js";
import { singleUpload } from "../middleWare/multer.js";


const storeRouter = express.Router();

storeRouter.post("/",  AddStore);// add retailer auth. after done with api.this adds the store to the mongoDB 
storeRouter.post("/:id/products", singleUpload, addStoreProduct);// adds the product to the store as per the store_id
storeRouter.get("/", authentication, getStores);//returns all the stores in the mongoDb 
storeRouter.get("/:id", authentication, getSpecificStore);//Returns the specific store with the store id
storeRouter.get("/:id/products", authentication, getStoreProducts);//get products of the store who's id is passed from frontend
storeRouter.get("/:storeId/products/:productId", authentication, getSpecificStoreProduct);//to get a specific product from a specific store
storeRouter.delete("/:storeId", deleteStore);//deletes the whole store along with the products
storeRouter.delete("/:storeId/products/:productId",deleteProduct);//deletes a specific product of a specific store
storeRouter.put("/:storeId",updateStoreController);//updates the details of the store
storeRouter.put("/:storeId/products/:productId",updateProductController);//updates a specific product within a specific store

export default storeRouter;