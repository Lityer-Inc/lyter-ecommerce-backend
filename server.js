require("dotenv").config();
const express = require("express");
const { requireAuth } = require("./middleWare/authMiddleware");
const auth = require("./routes/auth");
const customer = require("./routes/customer");
const product = require("./routes/product");
const order = require("./routes/order");  
const store = require("./routes/store");
const bodyParser = require("body-parser");
const cors = require("cors");
const { handleErrors } = require("./middleWare/error");
const Logger = require("./middleWare/log");
const Customer = require("./model-database/models/customers");
const Retailer = require("./model-database/models/retailers");
const CustomerOrder = require("./model-database/models/customer_orders"); 
const Product = require("./model-database/models/products");
const Category = require("./model-database/models/category");
const Store = require("./model-database/models/stores");
const OrderDetails = require("./model-database/models/order_details");
const sequelize = require("./model-database/database/database");
const { DecodeJwt } = require("./utils/decodeJwt");
const app = express();

//parse application/json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Logger middleware
app.use(Logger.logRequest);
// test

// app.get("/", function (req, res) {
//   res.send("welcome");
// });



//const EndpointHead = process.env.EndpointHead;
const EndpointHead = ""; // temporary...- JF
 
app.use(`${EndpointHead}/auth`, auth);
app.use(`${EndpointHead}/products`, product);
app.use(`${EndpointHead}/customer`, customer); 
app.use(`${EndpointHead}/store`, customer);  // probably store should have its own route
app.use(`${EndpointHead}/retailer`, customer); // probably retailer should have its own route.

app.get(`${EndpointHead}/decodeJwt`, DecodeJwt); // probably retailer should have its own route.
   

// Middleware to log incoming requests to the orders route
app.use(`/orders`, (req, res, next) => {
  console.log(`Incoming request for orders route: ${req.method} ${req.originalUrl}`);
  console.log(`Request body:`, req.body);
  next();
}, order);


// Error handler middleware
app.use(handleErrors);

//Establishing database relationships
 
// Customer-Order Relationship
Customer.hasMany(CustomerOrder);
CustomerOrder.belongsTo(Customer); 

// Retailer-Product-store Relationship
Store.hasMany(Product);
Store.belongsTo(Retailer, { foreignKey: "retailerId" });
Product.belongsTo(Store, { foreignKey: "storeId" });
 
//Category to product relationship
Category.hasMany(Product, { foreignKey: "categoryId" });
Product.belongsTo(Category, { foreignKey: "categoryId" });

// Each order detail is for one product
OrderDetails.belongsTo(Product, { foreignKey: "productId" });

// sequelize sync //ini my database
sequelize
  .sync()
  // .sync()
  .then((result) => {
    //console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, function () {
  console.log("App is Listening http://localhost:8000");
});
