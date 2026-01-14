import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/destinations",destinationRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/auth",userRoutes);

app.get("/",(req,res)=>{
    res.send("TripTales API is running!!");
});

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})