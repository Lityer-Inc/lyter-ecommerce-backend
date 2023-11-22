const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const retailers = sequelize.define("retailers", {
  id: {
    type: Sequelize.DataTypes.UUID, // Specify the data type (e.g., UUID, string, etc.)
    primaryKey: true, // Set this field as the primary key
    autoIncrement: false, // Disable auto-increment
    defaultValue: Sequelize.UUIDV4, // Provide a default value (e.g., UUIDv4)
    allowNull: false, // Make it non-nullable if required
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  socials_twitter: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  socials_facebook: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  socials_instagram: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  socials_linkedin: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = retailers;
