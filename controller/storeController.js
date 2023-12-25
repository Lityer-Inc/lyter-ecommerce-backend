import  {storeModel}  from "../models/Store.js";

export const AddStore = async (req, res, next) => {
  try {
    

    // Check for required fields
    if (!req.body.id || !req.body.name || !req.body.store_email || !req.body.deliveryTime) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    // Create an array of product objects based on the productSchema
    // const productArray = products
    //   ? products.map(product => ({
    //       productName: product.productName,
    //       price: product.price,
    //       // Add other product-related fields as needed
    //     }))
    //   : null;
    

    // Create the store data
    const storeData = {
      id:req.body.id,
      name:req.body.name,
      store_email:req.body.store_email,
      deliveryTime:req.body.deliveryTime,
      description: req.body.description || null,
      avatar: req.body.avatar || null,
      revenue: req.body.revenue || 0,
      sales: req.body.sales || 0,
      products: null,
      // Add other fields as needed
    };

    // Create a new store instance
     const newStore = new storeModel(storeData);

    // Save the new store to the database
     const savedStore = await newStore.save();

    // Respond with the saved store data
    res.status(201).json(storeData);
  } catch (error) {
    // Handle error
    console.error("Error adding store:", error);
    res.status(500).send("Internal Server Error");
  }
};




//gets the list of all the available stores in the mongodb
export const getStores = async (req, res) => {
  try {
    const stores = await storeModel.find();

    if (stores.length === 0) {
      return res.status(404).json({ message: "No stores found" });
    }

    res.json(stores);
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getSpecificStore = async (req, res) => {//returns the specific store according to the custom id provided. Not the MongoDb id
  try {

    const stores = await storeModel.findOne({id:req.params.id});

    if (stores.length === 0) {
      return res.status(404).json({ message: "Store Does not Exist" });
    }

    res.json(stores);
  } catch (error) {
    console.error("Error fetching store:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


