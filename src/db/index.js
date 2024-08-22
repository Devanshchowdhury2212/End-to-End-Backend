import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectdb = async() =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongo DB connected @ ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGODB connection FAILED",error);
        process.exit(1)
    }
}

export default connectdb