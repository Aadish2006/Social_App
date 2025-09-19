import mongoose from "mongoose";

const ConnectDB = async () =>{
    try{
    await mongoose.connect  (process.env.dbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}   );
    console.log("Connected to MongoDB");
} catch (err) {
    console.log("Error connecting to MongoDB", err);
    process.exit(1);
}
}

export default ConnectDB;