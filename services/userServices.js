const { UserModel } = require("../models/user.model");

module.exports.createUserServices = async (userData) => {
  const newUser = new UserModel(userData);
  return await newUser.save();
};

module.exports.findOneUserService = async (query) => {
  return await UserModel.findOne(query).exec();
};
module.exports.updateUserService = async (query, data) => {
  return await UserModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};
// module.exports.findAllUserServices = async (query) => {
//   return await UserModel.find(query).exec();
// };
module.exports.deleteOneServices = async (query) => {
  return await UserModel.findOneAndDelete(query).exec();
};
module.exports.deleteAllServices = async (query) => {
  return await UserModel.remove(query).exec();
};
