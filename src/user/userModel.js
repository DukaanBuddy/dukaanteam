import mongoose from "mongoose";

const addressSchema = {
  street: String,
  block: String,
  landMark: String,
  city: String,
  district: String,
  state: String,
  pincode: Number,
};

// const phoneNumbersSchema = {
//   phoneNumber1: String,
//   phoneNumber2: String,
//   phoneNumber3: String,
// };

// const emailsSchema = {
//   email1: String

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
      // required: true,
    },
    bussinessUuid: String,
    fullName: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    doingBusinessAs: String,
    address: addressSchema,
    phoneNumbers: String,
    emails: String,
    occupation: String,
    age: Number,
    dateOfIncorporation: Date,
    GSTIN: {
      type: String,
      //   unique: true,
    },
    aadharNumber: {
      type: String,
      //   unique: true,
    },
    panNumber: String,

    // password: {
    //     type: String,
    //     required: true,
    // },
    aadharPhoto: String,
    bankDetails: bankDetailsSchema,
    customerSince: Date,
    fullNameOfTheBusiness: String,
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

export default mongoose.model("User", UserSchema);
