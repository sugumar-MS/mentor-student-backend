import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL= process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        if (!MONGODB_URL) {
            throw new Error("MongoDB URL not set in environment variables");
        }
        await mongoose.connect(MONGODB_URL, {
            
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default connectDB;