const CustomerOrders = require("../model-database/models/customer_orders");
const OrderDetails = require("../model-database/models/order_details");
const Customer = require("../model-database/models/customers");  
const ErrorResponse = require("../utils/errorResponse");

exports.addOrder = async (req, res, next) => {
  try {
    const { customerInfo, orderData, orderItems } = req.body; 

    // Insert new customer record
    const newCustomer = await Customer.create(customerInfo); 
    
    // Update orderData with the new customer's ID 
    const updatedOrderData = {
  ...orderData,
  customerId: newCustomer.id,
  fullname: customerInfo.fullname, // Corrected field name
  delivery_instruction: customerInfo.delivery_instruction,
  street_address: customerInfo.street_address,
  city: customerInfo.city,
  zip: customerInfo.zip,
  phone: customerInfo.phone,
  country: customerInfo.country,
  delivery_address: customerInfo.delivery_address
};

    // Create main order with updated data
    const order = await CustomerOrders.create(updatedOrderData);

    // Add order details/items
    for (const item of orderItems) {
      await OrderDetails.create({
        orderId: order.id,
        productId: item.productId,
        price: item.price
      });
    }

    res.status(201).json({ status: true, order: order, orderItems: orderItems, customer: newCustomer });
  } catch (error) {
    console.error("Error adding order:", error);
    next(new ErrorResponse("Error adding order", 500));
  }
};

