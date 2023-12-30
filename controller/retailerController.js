const Customer = require("../model-database/models/customers");
const Retailers = require("../model-database/models/retailers");
const Products = require("../model-database/models/products");
const Stores = require("../model-database/models/stores");
const ErrorResponse = require("../utils/errorResponse");
const { sequelize } = require("sequelize");
const Retailer_orders = require("../model-database/models/retailer_order");

//here I get the retailer, his store and  all products associated
export const getRetailer = async (req, res, next) => {
  try {
    const retailer = await Retailers.findOne({ where: { id: req.user.id } });
    if (!retailer) return next(new ErrorResponse("Retailer not found", 401));
    const store = await Stores.findOne({ where: { retialerId: req.user.id } });
    if (!store) return next(new ErrorResponse("Store not found for user", 401));
    const products = await Products.findAll({ where: { storeId: store.id } });
    if (!products)
      return next(new ErrorResponse("No product found for store", 401));

    return res.status(200).json({
      status: true,
      retailer: retailer,
      store: store,
      products: products,
    });
  } catch (err) {
    next(err);
  }
};

//Here I get all the orders a retailer gets from his/her store
export const getRetailerOrders = async (req, res, next) => {
  try {
    const retailer = await Retailers.findOne({ where: { id: req.user.id } });
    if (!retailer) return next(new ErrorResponse("Retailer not found", 401));
    const store = await Stores.findOne({ where: { retialerId: req.user.id } });
    if (!store) return next(new ErrorResponse("Store not found for user", 401));
    const retilerOrders = await Retailer_orders.findAll({
      where: { storeId: store.id },
    });
    if (!retilerOrders) return next(new ErrorResponse("No orders", 401));

    return res.status(200).json({
      status: true,
      retailer: retailer,
      store: store,
      retilerOrders: retilerOrders,
    });
  } catch (err) {
    next(err);
  }
};

export const updateRetailer = async (req, res, next) => {
  const file = req.file;
  if (!file) return next(new ErrorResponse("no image file uploaded", 401));

  const fileName = file.originalname;
  const basePath = `${req.protocol}://${req.get("host")}/uploads/`;

  var objForUpdate = {};
  if (req.body.name) {
    const nameSplit = req.body.name.split(" ");
    objForUpdate.first_name = nameSplit[0];
    objForUpdate.last_name = nameSplit[1];
  }
  if (req.body.email) objForUpdate.email = req.body.email;
  if (req.body.avatar) objForUpdate.avatar = `${basePath}${fileName}`;
  if (req.body.country) objForUpdate.country = req.body.country;
  if (req.body.address) objForUpdate.address = req.body.address;
  if (req.body.job) objForUpdate.job = req.body.job;
  if (req.body.description) objForUpdate.description = req.body.description;
  if (req.body.comapny) objForUpdate.comapny = req.body.comapny;
  if (req.body.phone) objForUpdate.phone = req.body.phone;
  if (req.body.socials_twitter)
    objForUpdate.socials_twitter = req.body.socials_twitter;
  if (req.body.socials_facebook)
    objForUpdate.socials_facebook = req.body.socials_facebook;
  if (req.body.socials_instagram)
    objForUpdate.socials_instagram = req.body.socials_instagram;
  if (req.body.socials_linkedin)
    objForUpdate.socials_linkedin = req.body.socials_linkedin;

  try {
    await Retailers.update(objForUpdate, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: true, message: "Customer updated" });
  } catch {
    next(error);
  }
};
