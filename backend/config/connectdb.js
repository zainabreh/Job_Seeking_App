import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/job-finding-app')
        console.log("connection was successfully");        
    } catch (error) {
        console.log(error);
        
    }
    
}