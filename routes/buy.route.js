const express = require("express");
const { createBuy, getAllBoughts } = require("../controllers/buy.controller");
const buyRouter = express.Router();

buyRouter.post("/create", createBuy);
buyRouter.get("/get-buys", getAllBoughts);

module.exports = buyRouter;
