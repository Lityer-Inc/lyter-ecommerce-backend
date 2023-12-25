import mongoose from "mongoose";
import { productSchema } from "./Products.js";

const storeSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    unique:true,//id must always be unique for the store
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  store_email: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
  revenue: {
    type: Number,
    required: false,
    default: 0,
  },
  sales: {
    type: Number,
    required: false,
    default: 0,
  },
  description: {
    type: String,
    required: false,
  },
  products: [productSchema], 

});

export const storeModel = mongoose.model("Store", storeSchema);

