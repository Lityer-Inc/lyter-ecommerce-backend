import express from 'express';
const orderRouter = express.Router();
import {addOrder,fetchAllOrders} from '../controller/ordersController.js';


orderRouter.post("/add_order", addOrder);
 
orderRouter.get("/all_orders", fetchAllOrders);

export default orderRouter;
