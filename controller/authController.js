const Customer = require("../model-database/models/customers");
const Retailer = require("../model-database/models/retailers");
const bcrypt = require("bcrypt");
const ErrorResponse = require("../utils/errorResponse");
const { createToken } = require("../utils/Token");

exports.createCustomer = async (req, res, next) => {
  const { email, name, password } = req.body;
  try {
    //const salt = bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = await Customer.create({
      email: email,
      name: name,
      password: hashedPassword,
      createdAt: new Date().getTime()
      // balanceUsdt: 0,
      // balanceUsdc: 0,
    });

    if (!customer)
      return next(new ErrorResponse("the user cannot be created!", 401));

    const token = createToken(await customer.dataValues.id);
    console.log('customer.databavalues.id : ', customer.dataValues.id);
    res.status(200).json({ status: true, message: "Account created", token });
  } catch (error) {
    next(error);
  }
};

exports.createRetailer = async (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    //const salt = bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const retailer = await Retailer.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashedPassword,
    });

    if (!retailer)
      return next(new ErrorResponse("the user cannot be created!", 401));

    res.status(200).json({ status: true, message: "Account created" });
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = await req.body;
  console.log('req body: ', req.body);
  try {
    const customerCheck = await Customer.findOne({ where: { email: email } });
    const retailerCheck = await Retailer.findOne({ where: { email: email } });

    if (!customerCheck && !retailerCheck) {
      return next(new ErrorResponse("User not found", 401));
    }

    let user;
    if (customerCheck) {
      user = customerCheck;
    } else {
      user = retailerCheck;
    }
    const auth = await bcrypt.compare(password, user.dataValues.password);
    if (!auth) return next(new ErrorResponse("Incorrect password"));

    const token = createToken(user.dataValues.id);
    const userData = await (customerCheck ? Customer : Retailer).findOne({
      where: { email: email },
      attributes: { exclude: ["password"] },
    });

    res.status(200).json({ status: true, data: userData, token: token });
  } catch (error) {
    next(error);
  }
};
