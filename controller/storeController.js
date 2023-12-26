
import  {storeModel}  from "../models/Store.js";


export const addStoreProduct=async (req,res)=>{
  try {
    const id = req.params.id;
    const product={
      name:req.body.name,
      storeName:req.body.storeName,
      countInStock:req.body.countInStock,
      image:req.body.image,
      price:req.body.price,
      rating:req.body.rating,
      isFeatured:req.body.isFeatured,
      description:req.body.description,
      barcode:req.body.barcode,
      status:req.body.status,
    } 

    // Check if the store with the given ID exists
    const store = await storeModel.findOne({_id:id});

    if (!store) {
      return res.status(404).json({ error: "Store not found." });
    }

    // Check for required fields
    if (  !product.name || !product.storeName || !product.countInStock || !product.image || !product.price || !product.description || !product.barcode || !product.status) {
      // return res.status(400).json({ error: "Required fields are missing." });
      return res.status(400).json(product);
    }
    
   
    store.products = Array.isArray(store.products) ? store.products : [];
    // Add the new product to the store's products array
     store.products = [...store.products, product];
     
    // Save the updated store with the new product
     const updatedStore = await store.save();
    // Respond with the updated store data
    return res.status(200).json(updatedStore);
  } catch (error) {
    // Handle error
    console.error("Error adding product to store:", error);
    return res.status(500).send("Internal Server Error");
  }

}


export const AddStore = async (req, res) => {
  try {
    // Check for required fields
    if (!req.body.name || !req.body.store_email || !req.body.deliveryTime) {
      return res.status(400).json({ error: "Required fields are missing." });
    }

    // Create the store data
    

    // Create a new store instance
    const newStore = new storeModel({
      name: req.body.name,
      store_email: req.body.store_email,
      deliveryTime: req.body.deliveryTime,
      description: req.body.description || null,
      avatar: req.body.avatar || null,
      revenue: req.body.revenue || 0,
      sales: req.body.sales || 0,
      products: null,
      id:req.body.id
    });

    // Save the new store to the database
    const savedStore = await newStore.save();

    // Respond with the saved store data
    res.status(201).json(savedStore);
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

    const stores = await storeModel.findOne({_id:req.params.id});

    if (stores.length===0) {
      return res.status(404).json({ message: "Store Does not Exist" });
    }

    res.json(stores);
  } catch (error) {
    console.error("Error fetching store:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getStoreProducts = async (req, res) => {//returns the store products in the db
  try {
    const stores = await storeModel.findOne({_id:req.params.id});

    if (!stores) {
      return res.status(404).json({ message: "Store Does not Exist" });
    }
    return res.json(stores.products);
  } catch (error) {
    console.error("Error fetching store:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//returns a specific product in a store
export const getSpecificStoreProduct=async (req,res)=>{
  const store = await storeModel.findOne({_id:req.params.id});
  if (!store) {
    return res.status(404).json({ message: "Store Does not Exist" });
  }
  
}