const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  itemID: { type: String },
  itemName: { type: String },
  itemQuality: { type: String },
  salePrice: { type: Number },
  itemDiscount: { type: Number, default: 0 },
});
const BuySchema = new mongoose.Schema({
  bussinessUuid: String,
  supplierUuid: { type: String, ref: "vendors" },
  //   remove later after better work flow
  suplierName: String,
  supplierMobile: Number,
  dateTime: { type: Date, default: Date.now },
  transactionAmount: { type: Number },
  numberOfItems: { type: Number },
  items: [itemSchema],
  itemUnit: { type: String },
  transactionStatus: { type: String },
  totalPaid: { type: Number },
  remainingTransactionAmount: { type: Number },
  committedDateToPay: { type: Date },
});

module.exports.BuyModel = mongoose.model("Buy", BuySchema);
