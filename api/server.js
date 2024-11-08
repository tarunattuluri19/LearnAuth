import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
dotenv.config();
const app=express()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to db")
}).catch((err)=>{
    console.log(err)
})

app.listen(5000,()=>{
    console.log("Server is running on port on 5000")
})

app.use("/api/user", userRoute)


app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to Auth API"
    })
})