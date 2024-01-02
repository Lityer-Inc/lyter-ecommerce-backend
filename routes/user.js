import  express  from "express";
import { userRegisterController, userLoginController,userLogoutController, userGetController } from "../controller/userController.js";

const userRouter=express.Router();

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController); // to be implemented by undefined
userRouter.post("/logout", userLogoutController); // to be implemented by undefined
userRouter.get("/:userId", userGetController);

  
export default userRouter;