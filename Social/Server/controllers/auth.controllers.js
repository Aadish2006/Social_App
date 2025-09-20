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

   const newUser = await User.create({name,email,password: hashedPassword,username})
   res.status(201).json(newUser)
}

export const signIn = async (req,res)=>{
    const {password,username} = req.body 

    if(!password||!username){
        return res.status(400).json({message:"Please fill all the fields"})
    }
    const existingUser = await User.findOne({username})
    if(!existingUser){
        return res.status(400).json({message:"User does not exist"})
    }
    
    const  isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password"})
    }
    res.status(200).json({message:"User signed in successfully",user:existingUser})
}