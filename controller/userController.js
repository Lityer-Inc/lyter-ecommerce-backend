import userModel from "../models/User.js"

export const userRegisterController = async (req, res) => {
    try {
      if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Required fields are missing." });
      }
  
      // Check if a user with the same email already exists
      const existingUserWithEmail = await userModel.findOne({ email: req.body.email });
      if (existingUserWithEmail) {
        return res.status(400).json({ error: "User with the same email already exists." });
      }
  
      // Check if a user with the same contactNumber already exists
      if (req.body.contactNumber) {
        const existingUserWithContactNumber = await userModel.findOne({ contactNumber: req.body.contactNumber });
        if (existingUserWithContactNumber) {
          return res.status(400).json({ error: "User with the same contact number already exists." });
        }
      }
  
      const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        contactNumber: req.body.contactNumber || null,
        city: req.body.city || null,
        address: req.body.address || null,
        account_status: req.body.account_status || true,
      });
  
      const newUser = await user.save();
      return res.status(200).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const userLoginController=(req,res)=>{
     res.status(404).json("login hit");
  }