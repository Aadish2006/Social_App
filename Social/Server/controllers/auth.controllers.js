import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
export const SignUp = async(req,res)=>{
   const {name,email,password,username} = req.body
 // Checks
   if(!name||!email||!password||!username){
    return res.status(400).json({message:"Please fill all the fields"})
   }

   const existingUserEmail = await User.findOne({email})
   if(existingUserEmail){
    return res.status(400).json({message:"User with this email already exists"})
   }

   const existingUserName  = await User.findOne({username})
   if(existingUserName){
    return res.status(400).json({message:"User with this Username already exists"})
   }
   if(password.length<6){
    return res.status(400).json({message:"Password must be at least 6 characters long"})
   }
   const salt = await bcrypt.genSalt(10)
   console.log(salt)
   const hashedPassword = await bcrypt.hash(password,salt);

   await User.create({name,email,password: hashedPassword,username})
   res.status(201).json({message:"User created successfully"})
}