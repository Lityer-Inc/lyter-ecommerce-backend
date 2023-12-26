import { getStores,getSpecificStore,getStoreProducts,addStoreProduct,getSpecificStoreProduct } from "../controller/storeController.js";
import express from "express"
import {AddStore} from '../controller/storeController.js';


const storeRouter = express.Router();

storeRouter.post("/add_store",  AddStore);// add retailer auth. after done with api.this adds the store to the mongoDB 
storeRouter.post("/:id/addProduct",addStoreProduct);// adds the product to the store as per the store_id
storeRouter.get("/",getStores);//returns all the stores in the mongoDb 
storeRouter.get("/:id",getSpecificStore);//Returns the specific store with the store id
storeRouter.get("/:id/products",getStoreProducts);//get products of the store who's id is passed from frontend
storeRouter.get("/:storeId/products/:productId",getSpecificStoreProduct);

export default storeRouter;