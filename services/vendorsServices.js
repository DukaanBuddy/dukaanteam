const { VendorModel } = require("../models/vendors.model");

const createVendorServices = async (data) => {
  const newVendor = new VendorModel(data);
  return await newVendor.save();
};

const findOneVendorService = async (query) => {
  return await VendorModel.findOne(query).exec();
};

const updateVendorService = async (query, data) => {
  return await VendorModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};

const findAllVendorServices = async (query) => {
  return await VendorModel.find(query).exec();
};

const deleteOneVendorServices = async (query) => {
  return await VendorModel.findOneAndDelete(query).exec();
};

module.exports = {
  createVendorServices,
  deleteOneVendorServices,
  findAllVendorServices,
  findOneVendorService,
  updateVendorService,
};
