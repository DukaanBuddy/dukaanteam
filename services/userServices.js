const { UserModel } = require("../models/user.model");

const createUserServices = async (userData) => {
  const newUser = new UserModel(userData);
  return await newUser.save();
};

const findOneUserService = async (query) => {
  return await UserModel.findOne(query).exec();
};

const checkUserHasBusiness = async (data) => {
  return await UserModel.findOne({$or:[
    {email:data?.email},
    {phone:data?.phone}
  ]}).exec();
};

const updateUserService = async (query, data) => {
  return await UserModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};

// const findAllUserServices = async (query) => {
//   return await UserModel.find(query).exec();
// };

const deleteOneServices = async (query) => {
  return await UserModel.findOneAndDelete(query).exec();
};

// const deleteAllServices = async (query) => {
//   return await UserModel.deleteMany(query).exec();
// };

module.exports = {
  checkUserHasBusiness,
  createUserServices,
  findOneUserService,
  updateUserService,
  // findAllUserServices,
  deleteOneServices,
  // deleteAllServices,
};
