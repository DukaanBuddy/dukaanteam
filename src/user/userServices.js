import UserModel from "./userModel.js";

import userValidationSchema from "./user.validator.js";




const validateUserData = async (userData) => {
  try {
    await userValidationSchema.validateAsync(userData);
  } catch (error) {
    throw new Error(error.details.map((err) => err.message).join(', '));
  }
};

export const createUserServices = async (userData) => {
  try {

    await validateUserData(userData);

    const newUser = new UserModel(userData);
    return await newUser.save();
  } catch (error) {
    // Handle validation errors or any other errors
    throw new Error(`Error creating user: ${error.message}`);
  }
};

export const findOneUserService = async (query) => {
  return await UserModel.findOne(query).exec();
};

export const updateUserService = async (query, data) => {
  try {

    await validateUserData(data);

    return await UserModel.findOneAndUpdate(query, { $set: data }, { new: true }).exec();
  } catch (error) {
    // Handle validation errors or any other errors
    throw new Error(`Error updating user: ${error.message}`);
  }
};

export const findAllUserServices = async (query) => {
  return await UserModel.find(query).exec();
};

export const deleteOneServices = async (query) => {
  return await UserModel.findOneAndDelete(query).exec();
};

export const deleteAllServices = async (query) => {
  return await UserModel.remove(query).exec();
};

