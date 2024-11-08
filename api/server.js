import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cors from 'cors';
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.listen(5000, () => {
  console.log("Server is running on port on 5000");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Auth API",
  });
});

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    })
})