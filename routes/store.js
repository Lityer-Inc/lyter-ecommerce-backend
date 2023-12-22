import { getStores } from "../controller/storeController.js";
import express from "express"
const storeRouter = express.Router();
import {AddStore} from '../controller/storeController.js';
import { requireRetailerAuth } from '../middleWare/authMiddleware.js';


storeRouter.post("/add_store", requireRetailerAuth, AddStore);
storeRouter.get("/",getStores);
export default storeRouter;