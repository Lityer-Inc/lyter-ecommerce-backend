import  express  from "express";
import { userRegisterController } from "../controller/userController.js";

const userRouter=express.Router();

userRouter.post("/register",userRegisterController);

export default userRouter;