const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  // expenseID: { type: String, required: true },
  expenseCategory: {
    type: String,
    enum: ["Salary", "Office_Expense", "Rent", "EMI", "Utility"],
    required: true,
  },
  amount: { type: Number, required: true },
  creatorPartyID: { type: String, required: true },
  creatorPartyType: { type: String, required: true },
  paymentMode: { type: String },
  paidTo: { type: String },
  salaryDetails: {
    amount: { type: Number },
    dateTime: { type: Date },
    employeeID: { type: String },
    salaryPeriod: { type: String },
  },

  businessUuid: { type: String },
});
export default mongoose.model("Expense", expenseSchema);
