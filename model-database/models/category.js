const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const category = sequelize.define("category", {
  id: {
    type: Sequelize.DataTypes.UUID,
    primaryKey: true, 
    autoIncrement: false, 
    defaultValue: Sequelize.UUIDV4, 
    allowNull: false, 
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = category;
