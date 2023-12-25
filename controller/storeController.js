import  {storeModel}  from "../models/Store.js";



export const AddStore = async (req, res, next) => {
  // const { store_name, store_email, delivery_time, description } = req.body;
  // const store = await Stores.create({
  //   name: store_name,
  //   store_email: store_email,
  //   deliveryTime: delivery_time,
  //   description: description,
  // });

  // if (!store)
  //   return next(new ErrorResponse("this product cannot be added!", 401));

  // res.status(200).json({ status: true, message: "Product added created" });
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


