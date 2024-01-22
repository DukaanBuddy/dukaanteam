import TasksModel from "./tasksModel";

export const createTaskServices = async (taskData) => {
  const newTask = new TasksModel(taskData);
  return await newTask.save();
};

export const findOneTaskService = async (query) => {
  return await TasksModel.findOne(query).exec();
};

export const updateTaskService = async (query, data) => {
  return await TasksModel.findOneAndUpdate(
    query,
    { $set: data },
    { new: true }
  ).exec();
};
export const findAllTaskServices = async (query) => {
  return await TasksModel.find(query).exec();
};
export const deleteOneServices = async (query) => {
  return await TasksModel.findOneAndDelete(query).exec();
};
export const deleteAllServices = async (query) => {
  return await TasksModel.remove(query).exec();
};
