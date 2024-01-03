import { getStores,getSpecificStore,getStoreProducts,addStoreProduct,getSpecificStoreProduct,deleteStore,deleteProduct,updateProductController,updateStoreController,getStoreOrdersController,getStoreOrdersController } from "../controller/storeController.js";
import express from "express"
import {AddStore} from '../controller/storeController.js';


const storeRouter = express.Router();

storeRouter.post("/",  AddStore);// add retailer auth. after done with api.this adds the store to the mongoDB 
storeRouter.post("/:id/products",addStoreProduct);// adds the product to the store as per the store_id
storeRouter.get("/",getStores);//returns all the stores in the mongoDb 
storeRouter.get("/:id",getSpecificStore);//Returns the specific store with the store id
storeRouter.get("/:id/products",getStoreProducts);//get products of the store who's id is passed from frontend
storeRouter.get("/:storeId/products/:productId",getSpecificStoreProduct);//to get a specific product from a specific store
storeRouter.delete("/:storeId",deleteStore);//deletes the whole store along with the products
storeRouter.delete("/:storeId/products/:productId",deleteProduct);//deletes a specific product of a specific store
storeRouter.put("/:storeId",updateStoreController);//updates the details of the store
storeRouter.put("/:storeId/products/:productId",updateProductController);//updates a specific product within a specific store
storeRouter.get("/:storeId/orders",getStoreOrdersController);
storeRouter.get("/:storeId/orders/:orderId",getSpecificStoreOrderController);
storeRouter.post("/:storeId/orders",getStoreOrdersController);

export default storeRouter;