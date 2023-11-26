 
const Sequelize = require("sequelize");
 
const sequelize = new Sequelize(
  "lityer_local",
  "lityer_user",
  "xxx",
  {
    dialect: "mysql",
    host: "localhost",
    logging: console.log // Enable logging
  }
);

module.exports = sequelize;
