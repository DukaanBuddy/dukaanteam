// const express = require("express");
// const cors = require("cors");
// const compression = require("compression");
import express from "express";
// import dotenv from "dotenv";
import compression from "compression";
import mongoose from "mongoose";
import cors from "cors";
// import userRouter from "./user/userRoutes.js";
// import("../connection/connection");
// const routes = require("./routes/index.route");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/DukkanBuddy", {
    // useNewUrlParser: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log("mongoose connection error", err));

const PORT = process.env.PORT || 8000;
const corsOptions = {
  origin: "*" || "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({ limit: "50mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// app.use(express.static(__dirname + "/public/uploads/"));

app.use(compression());

//routes

// app.use("/api/user", routes.user);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
