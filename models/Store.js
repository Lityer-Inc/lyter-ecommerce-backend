import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
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
    required: true,
    default: 0,
  },
  sales: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: false,
  },
});

export const storeModel = mongoose.model("Store", storeSchema);

