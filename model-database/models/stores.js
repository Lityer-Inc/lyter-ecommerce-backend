const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const stores = sequelize.define("stores", {
  id: {
    type: Sequelize.DataTypes.UUID, // Specify the data type (e.g., UUID, string, etc.)
    primaryKey: true, // Set this field as the primary key
    autoIncrement: false, // Disable auto-increment
    defaultValue: Sequelize.UUIDV4, // Provide a default value (e.g., UUIDv4)
    allowNull: false, // Make it non-nullable if required
  },
  
  retailerId: {
    type: Sequelize.DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'retailers',  
      key: 'id',         // foreign key reference
    }
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  store_email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  deliveryTime: {
    type: Sequelize.STRING,
    allowNull: true,
  } ,
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = stores;
