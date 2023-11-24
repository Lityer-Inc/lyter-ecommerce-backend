const Products = require("../model-database/models/products");
const Retailers = require("../model-database/models/retailers");
const Stores = require("../model-database/models/stores");
const Categories = require("../model-database/models/category");
const ErrorResponse = require("../utils/errorResponse");

exports.getProducts = async (req, res, next) => {
  let filter = {};
  if (req.query) {
    filter = req.query;
  }

  try {
    const products = await Product.findAll({
      where: filter,
    });

    if (!products || products.length === 0)
      return next(new ErrorResponse("No product available", 201));

    res.status(200).json({ status: true, products: products });
  } catch (error) {
    next(error);
  }
};

exports.getParticularProducts = async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: { id: req.params.product_id },
    });

    if (!products || products.length === 0)
      return next(new ErrorResponse("Particular product not found", 401));

    res.status(200).json({ status: true, product: product });
  } catch (error) {
    next(error);
  }
};
exports.AddProducts = async (req, res, next) => {
 
 if (!req.file) {
 
      return next(new ErrorResponse("No Product Image.", 401)); 
 }
 
  const { name, price, quantity, description, barcode, category } = req.body;
  const image = req.file.buffer; // Get image data from req.file (with multer)
 
  // Expecting one retailer in the DB and one store.
  const retailer = await Retailers.findOne();
  const retailerStore = await Stores.findOne({ where: { retailerId: retailer.id } });
  const categoryIdPadded = '1'.padStart(36, ' '); // Just hardcode 1 for now.

  try {
    const product = await Products.create({
      name: name,
      countInStock: quantity,
      price: price,
      image: image, // Store the image as a buffer
      description: description,
      isFeatured: true,
      barcode: barcode,
      status: "active",
      storeId: retailerStore.id,
      retailerId: retailer.id,
      categoryId: categoryIdPadded,
    });

    if (!product) {
      return next(new ErrorResponse("This product cannot be added!", 401));
    }

    res.status(200).json({ status: true, message: "Product added successfully" });
  } catch (error) {
    next(error);
  }
};

exports.boughtProduct = async (req, res) => {
  try {
  } catch (error) {}
};
