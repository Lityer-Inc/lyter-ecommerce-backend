import userModel from "../models/User.js";
import bcrypt from 'bcrypt';
// userRegisterController
export const userRegisterController = async (req, res) => {
  console.log("Received request data:", req.body)
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
          return res.status(400).json({ error: "User with the same contact number already exists." })
        }
      }
  // Secure password using bcrypt: To do
      const {password} = req.body;
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
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
   
  export const userGetController = async (req, res) => {
    try {
      const user = await userModel.findOne({ _id: req.params.userId });
  
      // Check if the user with the specified ID exists
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };


// userLoginController
  export const userLoginController= async (req,res)=>{
     try{
       const {email, password} = req.body;
        //  Find user using email
      const user = await userModel.findOne({ email });
      
      // Check if the user exist with condition
      if(!user){
        return res.status(404).json({error: 'User not found'})
      }
      
      // Compare Secured (hashed) Password with provided password
      const passwordMatch = await bcrypt.compare(password, user.password);

      // check is the provided password match with user password
      if(!passwordMatch){
        return res.status(404).json({error: 'Invalid password'})
      }

     return res.status(200).json({message: 'Login Successful'}) }
     catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }

  };

// userLogoutController
  export const userLogoutController=(req, res)=>{
    try{
      // after log out successfully 
      return res.status(200).json({message: 'Logout Successfully'})
    }catch (error){
      console.error;
      return res.status(500).json({error: 'Internal Server Error'})
    }
 }