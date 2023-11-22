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
  const { name, price, quantity, image, description, barcode, category } =
    req.body;
  const retailer = await Retailers.findOne({ where: { id: req.user.id } });
  const retailerStore = await Stores.findOne({
    where: { retailerId: req.user.id },
  });
  const categories = await Categories.findOne({
    where: { category: category },
  });

  const product = await Products.create({
    name: name,
    countInStock: quantity,
    price: price,
    image: image,
    description: description,
    isFeatured: true,
    barcode: barcode,
    status: "active",
    storeId: retailerStore.id,
    retailerId: retailer.id,
    categoryId: categories.id,
  });

  if (!product)
    return next(new ErrorResponse("this product cannot be added!", 401));

  res.status(200).json({ status: true, message: "Product added created" });
};

exports.boughtProduct = async (req, res) => {
  try {
  } catch (error) {}
};
