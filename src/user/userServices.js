import UserModel from "./userModel.js";
export const createUserServices = async (userData) => {
  const newUser = new UserModel(userData);
  return await newUser.save();
};

export const findOneUserService = async (query) => {
  return await UserModel.findOne(query).exec();
};
export const updateUserService = async (query, data) => {
  return await UserModel.findOneAndUpdate(
    { query },
    { $set: data },
    { new: true }
  ).exec();
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
