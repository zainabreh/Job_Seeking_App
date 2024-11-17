import mongoose from "mongoose"

export const connectDB = async ()=>{
    try {
        const db = await mongoose.connect('mongodb+srv://zainabrd93:O1VL0tXW8lYznEhr@cluster0.rep2s.mongodb.net/');
        console.log("connection was successfully");        
    } catch (error) {
        console.log(error);
        
    }
    
}