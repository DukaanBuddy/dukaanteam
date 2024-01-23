

module.exports.createTaskServices = async (taskData) => {
  const newTask = new TasksModel(taskData);
  return await newTask.save();
};

module.exports.findOneTaskService = async (query) => {
  return await TasksModel.findOne(query).exec();
};

module.exports.updateTaskService = async (query, data) => {
  return await TasksModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};
module.exports.findAllTaskServices = async (query) => {
  return await TasksModel.find(query).exec();
};
module.exports.deleteOneServices = async (query) => {
  return await TasksModel.findOneAndDelete(query).exec();
};
module.exports.deleteAllServices = async (query) => {
  return await TasksModel.remove(query).exec();
};
