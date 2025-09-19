import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: True,
  },
  Username: {
    type: String,
    required: True,
    unique: True,
  },
  email: {
    type: String,
    required: True,
    unique: True,
    // this will ASSUre we have unique emails every time.
  },
  password: {
    type: String,
    required: True,
  },
  ProfilePic:{
    type:String,
    default:''
  },
  bio:{
    type:String,
    default:""
  },
  followers:[],
  following:[],
  posts:[],
  reels:[],
  stories:[]
});

const User = mongoose.model("User", userSchema);

export default User;
