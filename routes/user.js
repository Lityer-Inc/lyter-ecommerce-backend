import  express  from "express";
import { userRegisterController, userLoginController,userLogoutController, userGetController } from "../controller/userController.js";
import { authentication } from "../middleWare/authentication.js";
const userRouter=express.Router();

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController); // to be implemented by undefined
userRouter.post("/logout",  authentication, userLogoutController); // to be implemented by undefined
userRouter.get("/:userId", authentication, userGetController);

  
export default userRouter;