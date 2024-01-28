const { SellModel } = require("../models/sell.model");

const createSellServices = async (data) => {
  const newSell = new SellModel(data);
  return await newSell.save();
};

const findOneSellService = async (query) => {
  return await SellModel.findOne(query).exec();
};

const updateSellService = async (query, data) => {
  return await SellModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};

const findAllSellServices = async (query) => {
  return await SellModel.find(query).exec();
};

const deleteOneSellServices = async (query) => {
  return await SellModel.findOneAndDelete(query).exec();
};

module.exports = {
  createSellServices,
  deleteOneSellServices,
  findAllSellServices,
  findOneSellService,
  updateSellService,
};
