import {topUp, updateCustomer} from "../controller/customerController.js";
import multer from "multer";
import { requireCustomerAuth } from "../middleWare/authMiddleware.js";
import express from "express"


const customerRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    cb(null, originalname);
  },
});

const upload = multer({ storage: storage });

customerRouter.post(
  "/",
  requireCustomerAuth,
  upload.single("img_url"),
  updateCustomer
);

customerRouter.post("/topup", requireCustomerAuth, topUp);

export default customerRouter;
