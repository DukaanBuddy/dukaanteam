import Joi from 'joi';

const addressSchema = {
    street: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Street must contain only letters, numbers, and spaces.')
        .required(),

    block: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Block must contain only letters, numbers, and spaces.')
        .required(),

    landMark: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Landmark must contain only letters, numbers, and spaces.')
        .required(),

    city: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('City must contain only letters and spaces.')
        .required(),

    district: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('District must contain only letters and spaces.')
        .required(),

    state: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('State must contain only letters and spaces.')
        .required(),

    pincode: Joi.string()  // Change to string for regex validation
        .regex(/^\d{6}$/)
        .message('Pincode must be a 6-digit number.')
        .required(),
}

const bankDetailsSchema = {
    accountNumber: Joi.string()
        .regex(/^\d{9,18}$/)
        .message('Account number must be 9 to 18 digits.')
        .required(),

    ifscNumber: Joi.string()
        .regex(/^[A-Za-z]{4}\d{7}$/)
        .message('IFSC number must be 4 letters followed by 7 digits.')
        .required(),

    accountType: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Account type must contain only letters and spaces.')
        .required(),
};

const userValidationSchema = Joi.object({
    profilePicture: Joi.string(),

    title: Joi.string()
        .valid("Miss", "Mrs", "Mr"),

    bussinessUuid: Joi.string(),

    fullName: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Full name must contain only letters and spaces.'),

    gender: Joi.string()
        .valid("Male", "Female", "Other"),

    doingBusinessAs: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Doing business as must contain only letters, numbers, and spaces.'),

    address: Joi.object(addressSchema),

    phoneNumber: Joi.string()
        .regex(/^\d{10}$/)
        .message('Phone number must be a 10-digit number.'),

    emailId: Joi.string()
        .email(),

    occupation: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Occupation must contain only letters and spaces.'),

    age: Joi.number(),

    dateOfIncorporation: Joi.date(),

    GSTIN: Joi.string()
        .regex(/^\d{15}$/)
        .message('GSTIN must be a 15-digit number.'),

    aadharNumber: Joi.string()
        .regex(/^\d{12}$/)
        .message('Aadhar number must be a 12-digit number.'),

    panNumber: Joi.string()
        .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
        .message('PAN number must be in the format ABCDE1234F.'),

    aadharPhoto: Joi.string(),

    bankDetails: Joi.object(bankDetailsSchema),

    customerSince: Joi.date(),

    businessName: Joi.string()
        .regex(/^[a-zA-Z0-9\s]+$/)
        .message('Business name must contain only letters, numbers, and spaces.'),

    preferedCommunication: Joi.string()
        .valid("Phone", "Email"),

    businessCategory: Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .message('Business category must contain only letters and spaces.'),

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
