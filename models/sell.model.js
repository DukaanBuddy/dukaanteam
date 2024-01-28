const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  frequency: {
    type: String,
    enum: ["Daily", "Weekly", "Bi-weekly", "Monthly"],
  },
  startDate: { type: Date },
  endDate: { type: Date },
  occurrences: { type: Number },
});

const itemSchema = new mongoose.Schema({
  itemID: { type: String },
  itemName: { type: String },
  itemQuality: { type: String },
  salePrice: { type: Number },
  itemDiscount: { type: Number, default: 0 },
  subscription: subscriptionSchema, // Subscription details for each item
});

const SellSchema = new mongoose.Schema({
  bussinessUuid: String,
  transactionID: { type: String },
  saleType: { type: String, enum: ["Aggregate", "Individual"] },
  customerName: { type: String },
  dateTime: { type: Date, default: Date.now },
  tranAmount: { type: Number },
  numberOfItems: { type: Number },
  items: [itemSchema],
  tranDiscount: { type: Number, default: 0 },
  itemUnit: { type: String },
  transactionStatus: { type: String },
  totalPaid: { type: Number },
  remainingTransactionAmount: { type: Number },
  committedDateToPay: { type: Date },
  roundOff: { type: Number },
  payment: {
    mode: { type: String },
    made: { type: Number },
  },
  deliveryPreference: {
    preferredDate: { type: Date },
    preferredTime: { type: String },
    assignedEmployee: { type: String },
  },
  deliveryAddressSameAsCustomer: { type: Boolean },
  deliveryAddress: { type: String },
  deliveryFee: { type: Number },
});

module.exports.SellModel = mongoose.model("Sell", SellSchema);
