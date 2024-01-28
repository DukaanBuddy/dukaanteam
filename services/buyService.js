const { BuyModel } = require("../models/buy.model");
const createBuyServices = async (data) => {
  const newBuy = new BuyModel(data);
  return await newBuy.save();
};

const findOneBuyService = async (query) => {
  return await BuyModel.findOne(query).exec();
};

const updateBuyService = async (query, data) => {
  return await BuyModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};

const findAllBuyServices = async (query) => {
  return await BuyModel.find(query).exec();
};

const deleteOneBuyServices = async (query) => {
  return await BuyModel.findOneAndDelete(query).exec();
};
module.exports = {
  createBuyServices,
  findOneBuyService,
  updateBuyService,
  findAllBuyServices,
  deleteOneBuyServices,
};
