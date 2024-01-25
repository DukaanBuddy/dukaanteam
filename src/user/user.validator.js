import Joi from "joi";

export const addressSchema = {
  street: Joi.string().required(),
  block: Joi.string().required(),
  landMark: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  state: Joi.string().required(),
  pincode: Joi.number().required(),
};

const bankDetailsSchema = {
  accountNumber: Joi.string().required(),
  ifscNumber: Joi.string().required(),
  accountType: Joi.string().required(),
};

const userValidationSchema = Joi.object({
  profilePicture: Joi.string(),
  title: Joi.string().valid("Miss", "Mrs", "Mr"),
  bussinessUuid: Joi.string(),
  fullName: Joi.string(),
  gender: Joi.string().valid("Male", "Female", "Other"),
  doingBusinessAs: Joi.string(),
  address: Joi.object(addressSchema),
  phoneNumber: Joi.string(),
  emailId: Joi.string().email(),
  occupation: Joi.string(),
  age: Joi.number(),
  dateOfIncorporation: Joi.date(),
  GSTIN: Joi.string(),
  aadharNumber: Joi.string(),
  panNumber: Joi.string(),
  aadharPhoto: Joi.string(),
  bankDetails: Joi.object(bankDetailsSchema),
  customerSince: Joi.date(),
  businessName: Joi.string(),
  preferedCommunication: Joi.string().valid("Phone", "Email"),
  businessCategory: Joi.string(),
  lastTransactionDate: Joi.date(),
  totalTransactionAmountTillDate: Joi.number(),
  totalTransactionCountTillDate: Joi.number(),
  hasSubscribed: Joi.boolean(),
  prePaid: Joi.object({
    amount: Joi.number(),
    currency: Joi.string(),
    prePaidDate: Joi.date(),
    prePaidExpiration: Joi.date(),
  }),
}).options({ abortEarly: false, allowUnknown: true });

export default userValidationSchema;
