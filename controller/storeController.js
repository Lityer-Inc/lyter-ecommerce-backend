const Customer = require("../model-database/models/customers");
const Retailers = require("../model-database/models/retailers");
const Products = require("../model-database/models/products");
const Stores = require("../model-database/models/stores");
const ErrorResponse = require("../utils/errorResponse");
const { sequelize } = require("sequelize");

exports.AddStore = async (req, res, next) => {
  const { store_name, store_email, delivery_time, description } = req.body;
  const store = await Stores.create({
    name: store_name,
    store_email: store_email,
    deliveryTime: delivery_time,
    description: description,
  });

  if (!store)
    return next(new ErrorResponse("this product cannot be added!", 401));

  res.status(200).json({ status: true, message: "Product added created" });
};
