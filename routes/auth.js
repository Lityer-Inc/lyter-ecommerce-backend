import express from "express"
const authRouter = express.Router();
import { createCustomer, createRetailer, loginUser } from "../controller/authController.js"

authRouter.post("/signup_customer", createCustomer);
authRouter.post("/signup_retailer", createRetailer);
authRouter.post("/login", loginUser);

export default authRouter;