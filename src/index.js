import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./user/userRoutes.js";

const app = express();
// const multer = require("multer")
app.use(express.json());
import cors from "cors";
app.use(cors());
// app.use(multer().any());
dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/DukkanBuddy", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("mongoose connection error", err));

app.use("/api/", userRouter);
// app.use("/api");
// const err = new Error('This is an error message');
// Error.captureStackTrace(err);

app.use((req, res) => {
  var err = new Error("Not Found");
  err.status = 404;
  return res.status(404).send({ status: "404 ", msg: "Path not found" });
});

app.listen(3002, () => {
  console.log(`Server running on port 3002`);
});
