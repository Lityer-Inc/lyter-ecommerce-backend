import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import customers from '../model-database/models/customers.js';
import ErrorResponse from '../utils/errorResponse.js';


export const requireCustomerAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Check if the header exists and has the Bearer token format
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token part (rem ove 'Bearer ' from the header)
    const token = authHeader.split(" ")[1];

    if (!token) return next(new ErrorResponse("No token available", 401));

    jwt.verify(token, "SECRET", async (err, decodedToken) => {
      if (err) return next(new ErrorResponse("Invalid token", 401));

      let customer = await Customer.findById(decodedToken.id);
      if (!customer) return next(new ErrorResponse("User not found", 401));

      req.customer = customer;
      next();
    });
  }
};

export const requireRetailerAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // Check if the header exists and has the Bearer token format
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token part (remove 'Bearer ' from the header)
    const token = authHeader.split(" ")[1];

    if (!token) return next(new ErrorResponse("No token available", 401));

    jwt.verify(token, "SECRET", async (err, decodedToken) => {
      if (err) return next(new ErrorResponse("Invalid token", 401));

      let retailer = await Retailer.findById(decodedToken.id);
      if (!retailer) return next(new ErrorResponse("User not found", 401));

      req.retailer = retailer;
      next();
    });
  }
};