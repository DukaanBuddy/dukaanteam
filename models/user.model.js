const mongoose =require("mongoose");

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

const UserSchema = new mongoose.Schema(
  {
    profilePicture: {
      type: String,
    },
    title: {
      type: String,
      enum: ["Miss", "Mrs", "Mr"],
    },
    bussinessUuid: String,
    fullName: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    doingBusinessAs: String,
    address: addressSchema,
    phoneNumber: String,
    emailId: String,
    occupation: String,
    age: Number,
    dateOfIncorporation: Date,
    GSTIN: String,
    aadharNumber: String,
    panNumber: String,
    aadharPhoto: String,
    bankDetails: bankDetailsSchema,
    customerSince: Date,
    businessName: String,
    preferedCommunication: { type: String, enum: ["Phone", "Email"] },
    businessCategory: String,
    lastTransactionDate: Date,
    totalTransactionAmountTillDate: Number,
    totalTransactionCountTillDate: Number,
    hasSubscribed: Boolean,
    prePaid: {
      amount: Number,
      currency: String,
      prePaidDate: Date,
      prePaidExpiration: Date,
    },
  },
  { timestamps: true }
);

module.exports.UserModel= mongoose.model("User", UserSchema);
