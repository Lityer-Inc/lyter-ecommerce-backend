import mongoose from "mongoose";

export const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      // storeName: {
      //   type: String,
      //   required: true,
      // },
      countInStock: {
        type: Number,
        required: true,
      },
      image: {
        type: Buffer, // storing images as Buffer data
        required: true,
      },
      price: {
        type: Number,
        required: true,
        default: 0.00,
      },
      rating: {
        type: Number,
        required: true,
        default: 10,
      },
      isFeatured: {
        type: Boolean,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      barcode: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
});


// export const productModel=mongoose.Model("product",productSchema);