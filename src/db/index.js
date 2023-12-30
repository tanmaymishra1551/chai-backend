
import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"
// const DB_NAME = "dbname";

const connectDB = async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`MongoDB connected`);
    }
    catch(error){
        console.log("ERROR: ", error);
        throw err
    }
}

export default connectDB;