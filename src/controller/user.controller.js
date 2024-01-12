import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
//==============================createUser=====================================//


export const createUser = async (req, res) => {
    try {
        // Validate the request body
        // validateUserInput(req.body);

        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// Custom validation function for user input
// const validateUserInput = (userData) => {
// Check for required fields
// if (!userData.title || !["Miss", "Mrs", "Mr"].includes(userData.title)) {
//     throw new Error('Invalid title');
// }

//     if (!userData.emails) {
//         throw new Error('Emails are required');
//     }

//     if (!userData.password) {
//         throw new Error('Password is required');
//     }

//     // Check for valid email using regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(userData.emails)) {
//         throw new Error('Invalid email address');
//     }

//     // Check for valid GSTIN using regex
//     if (userData.GSTIN) {
//         const gstinRegex = /^[0-9A-Za-z]{15}$/;
//         if (!gstinRegex.test(userData.GSTIN)) {
//             throw new Error('Invalid GSTIN');
//         }
//     }

//     // Check for valid Aadhar number using regex
//     if (userData.aadharNumber) {
//         const aadharRegex = /^[0-9]{12}$/;
//         if (!aadharRegex.test(userData.aadharNumber)) {
//             throw new Error('Invalid Aadhar number');
//         }
//     }

//     // Check for valid PAN number using regex
//     if (userData.panNumber) {
//         const panRegex = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]$/;
//         if (!panRegex.test(userData.panNumber)) {
//             throw new Error('Invalid PAN number');
//         }
//     }

//     // Add more validation checks for other fields as needed
// };

export default { createUser }










// const createUser = async (req, res) => {
//   try {
//     let {
//       Profile_Picture,
//       Prefix,
//       fname,
//       mname,
//       lname,
//       Gender,
//       business_name,
//       Business_category,
//       Business_Logo,
//       Bio,
//       Business_hours,
//       doing_business_as,
//       Address_line1,
//       phoneNumbersSchema,
//       Occupation,
//       Age,
//       DOB,
//       dateOfIncorporation,
//       GSTIN,
//       Aadhar_number,
//       Pan_number,
//       password
//     } = req.body
