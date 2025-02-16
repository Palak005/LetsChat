import mongoose from "mongoose"

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch(err){
        console.log(err);
    }
}

export default connectDB;