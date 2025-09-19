import User from '../models/user.model.js';

export const SignUp = async(req,res)=>{
   const {name,email,password,Username} = req.body
 // Checks
   if(!name||!email||!password||!Username){
    return res.status(400).json({message:"Please fill all the fields"})
   }

   const existingUserEmail = await User.findOne({email})
   if(existingUserEmail){
    return res.status(400).json({message:"User with this email already exists"})
   }

   const existingUserName  = await User.findOne({Username})
   if(existingUserName){
    return res.status(400).json({message:"User with this Username already exists"})
   }
   User.create({name,email,password,Username})
   res.status(201).json({message:"User created successfully"})
}