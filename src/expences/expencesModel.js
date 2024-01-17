const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expenseID: { type: String, required: true },
  expenseCategory: {
    type: String,
    enum: ["Salary", "Office Expense", "Inventory", "Rent", "EMI", "Utility"],
    required: true,
  },
  amount: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
  creatorPartyID: { type: String, required: true },
  creatorPartyType: { type: String, required: true },
  paymentMode: { type: String },
  paidTo: { type: String },

  // Separate Form for Salary Expense Category
  salaryDetails: {
    amount: { type: Number },
    dateTime: { type: Date },
    employeeID: { type: String },
    salaryPeriod: { type: String },
  },

  businessUuid: { type: String }, // Removed the "required" constraint for businessUuid
});
export default mongoose.model("Expense", expenseSchema);
