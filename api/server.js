import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
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

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Auth API",
  });
});
