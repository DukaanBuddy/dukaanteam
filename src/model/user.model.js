
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

const phoneNumbersSchema = {
    phoneNumber1: String,
    phoneNumber2: String,
    phoneNumber3: String,
};

const emailsSchema = {
    email1: String,
    email2: String,
};

const bankDetailsSchema = {
    accountNumber: String,
    routingNumber: String,
    accountType: String,
};

const UserSchema = new mongoose.Schema(
    {
        Profile_Picture: {
            type: String,
        },
        title: {
            type: String,
            enum: ["Miss", "Mrs", "Mr"],
            // required: true,
        },
        fullName: {
            type: String,
            // required: true,
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
        },

        doingBusinessAs: String,
        address: addressSchema,
        phoneNumbers: phoneNumbersSchema,
        emails: emailsSchema,
        occupation: String,
        age: Number,
        // dateOfIncorporation: Date,
        GSTIN: {
            type: String,
            unique: true,
        },
        aadharNumber: {
            type: String,
            unique: true,
        },
        panNumber: {
            type: String,
            unique: true,
        },
        // password: {
        //     type: String,
        //     required: true,
        // },
        bankDetails: bankDetailsSchema,
        customerSince: Date,
    },
    { timestamps: true }
);

export default mongoose.model("User", UserSchema);