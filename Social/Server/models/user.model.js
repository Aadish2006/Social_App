import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // this will ASSUre we have unique emails every time.
  },
  password: {
    type: String,
    required: true,
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

const User = mongoose.model("User", UserSchema);

export default User;
