import userModel from "../models/User.js"

export const userRegisterController=async (req,res)=>{
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Required fields are missing." });
      }
    const user=new userModel({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      contactNumber:req.body.contactNumber || null,
      city:req.body.city || null,
      address:req.body.address || null,
      account_status:req.body.account_status || true,
    });
    const newUser=await user.save();
    return res.status(200).json(newUser);
}