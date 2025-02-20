import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;

const connectDB = async()=> { await mongoose.connect(url)
  .then(() => console.log('Connected to DataBase !'))
  .catch(() => console.log("Failed to connect with DataBase !"));
}
export default connectDB;
