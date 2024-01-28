const mongoose = require("mongoose");

const addressSchema = {
  street: String,
  block: String,
  landMark: String,
  city: String,
  district: String,
  state: String,
  pincode: Number,
};

const bankDetailsSchema = {
  accountNumber: String,
  ifscNumber: String,
  accountType: String,
};

const VendorSchema = new mongoose.Schema({
  GSTIN: String,
  fullName: String,
  email: String,
  phone: String,
  address: addressSchema,
  bankDetails: bankDetailsSchema,
});
module.exports.VendorModel = mongoose.model("Vendor", VendorSchema);
