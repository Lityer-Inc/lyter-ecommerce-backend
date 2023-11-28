const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const customer_orders = sequelize.define("customer_orders", {
  id: {
    type: Sequelize.DataTypes.UUID, // Specify the data type (e.g., UUID, string, etc.)
    primaryKey: true, // Set this field as the primary key
    autoIncrement: false, // Disable auto-increment
    defaultValue: Sequelize.UUIDV4, // Provide a default value (e.g., UUIDv4)
    allowNull: false, // Make it non-nullable if required
  }, 
  
  customerId: {
    type: Sequelize.DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'customers',   // reference customers table
      key: 'id',         
    }
  },
  
  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   delivery_instruction: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   street_address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   city: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   zip: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   phone: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   country: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
   delivery_address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: " ",
  }, 
  
  amount: {
    type: Sequelize.DECIMAL(10, 2), 
    allowNull: false,
    defaultValue: 0.00,
  },
  channel: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "Website",
  },
  payment: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "Awaits payments",
  },
  fulfilled: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "Awaits fulfillment",
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "pending",
  },
});

module.exports = customer_orders;
