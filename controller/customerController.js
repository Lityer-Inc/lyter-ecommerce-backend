import Customer from '../model-database/models/customers.js';
import ErrorResponse from '../utils/errorResponse.js';
import { Sequelize } from 'sequelize';


export const updateCustomer = async (req, res, next) => {
  console.log(req.body, "req.body");
  console.log(req.file, "file request");

  const file = req.file;
  if (!file) return next(new ErrorResponse("no image file uploaded", 401));

  const fileName = file.originalname;
  const basePath = `${req.protocol}://${req.get("host")}/uploads/`;

  var objForUpdate = {};

  if (req.body.email) objForUpdate.email = req.body.email;
  if (req.body.avatar) objForUpdate.avatar = `${basePath}${fileName}`;
  if (req.body.city) objForUpdate.city = req.body.city;
  if (req.body.address) objForUpdate.address = req.body.address;
  if (req.body.mobile) objForUpdate.mobile = req.body.mobile;

  try {
    await Customer.update(objForUpdate, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: true, message: "Customer updated" });
  } catch {
    next(error);
  }
};

export const topUp = async (req, res, next) => {
  const objForUpdate = {};

  if (req.body.usdc) {
    objForUpdate.balanceUsdc = sequelize.literal(
      `balanceUsdc + ${req.body.usdc}`
    );
  }
  if (req.body.usdt) {
    objForUpdate.balanceUsdt = sequelize.literal(
      `balanceUsdt + ${req.body.usdt}`
    );
  }

  try {
    await Customer.update(objForUpdate, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).json({ status: true, message: "Customer balance updated" });
  } catch (error) {
    next(error);
  }
};
