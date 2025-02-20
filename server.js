import express from "express";
import dotenv from "dotenv";
import router from "./routes/feedbackRoutes.js";
import connectDB from "./config/mongoConnect.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

connectDB();

app.use("/api", router);

app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});