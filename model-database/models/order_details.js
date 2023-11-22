const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const OrderDetails = sequelize.define("order_details", {
  orderId: {
    type: Sequelize.DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'customer_orders', // reference customer_orders
      key: 'id', // key into customer_orders
    }
  },
  productId: {
    type: Sequelize.DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'products', // reference to the products model
      key: 'id',  // key into products
    }
  },
    price: {
    type: Sequelize.DECIMAL(10, 2),  
    allowNull: false,
    defaultValue: 0.00,
  }
  
});

module.exports = OrderDetails;

