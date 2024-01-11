import  express  from "express";
import { userRegisterController, userLoginController,userLogoutController, userGetController, adminRegisterController, getAdminsController, getSpecificAdminController } from "../controller/userController.js";
import { authentication } from "../middleWare/authentication.js";
import { jwtVerify } from "./jwt.js";
const userRouter=express.Router();

userRouter.get('/decodeJwt', jwtVerify);
userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.post("/logout",  authentication, userLogoutController);
userRouter.get("/:userId", authentication, userGetController);

userRouter.post("/admin/register",adminRegisterController);
userRouter.get("/admin",getAdminsController);
userRouter.get("/admin/:adminId",getSpecificAdminController);

  
export default userRouter;