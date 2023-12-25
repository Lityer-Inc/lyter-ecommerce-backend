import { getStores,getSpecificStore } from "../controller/storeController.js";
import express from "express"
const storeRouter = express.Router();
import {AddStore} from '../controller/storeController.js';
import { requireRetailerAuth } from '../middleWare/authMiddleware.js';


storeRouter.post("/add_store",  AddStore);// add retailer auth. after done with api 
storeRouter.get("/",getStores);//returns all the stores in the mongoDb 
storeRouter.get("/:id",getSpecificStore);//Returns the specific store with the store id
export default storeRouter;