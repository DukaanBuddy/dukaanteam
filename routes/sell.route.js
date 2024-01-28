const express = require("express");
const { createSell, getAllSells } = require("../controllers/sell.controller");
const sellRouter = express.Router();
sellRouter.post("/create", createSell);
sellRouter.get("/get-sales", getAllSells);
module.exports = sellRouter;
