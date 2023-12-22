import express from "express";
import retailerRouter from "express.Router";
import retailerController, { getRetailer, getRetailerOrders, updateRetailer } from "../controller/retailerController.js";
import multer from "multer";
import { requireRetailerAuth } from "../middleWare/authMiddleware.js";

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

retailerRouter.get(
  "/get_retailer",
  requireRetailerAuth,
  getRetailer
);
retailerRouter.get(
  "/retailer_orders",
  requireRetailerAuth,
  getRetailerOrders
);
retailerRouter.get(
  "/fufill_retailer_order",
  requireRetailerAuth,
  retailerController.fufillRetailerOrder
);
retailerRouter.put(
  "/update_retailer",
  requireRetailerAuth,
  upload.single("img_url"),
 updateRetailer
);

export default retailerRouter;
