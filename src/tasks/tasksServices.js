import TasksModel from "./tasksModel";
import taskValidationSchema from "./task.validator";

// export const createTaskServices = async (taskData) => {
//   const newTask = new TasksModel(taskData);
//   return await newTask.save();
// };

// export const findOneTaskService = async (query) => {
//   return await TasksModel.findOne(query).exec();
// };

// export const updateTaskService = async (query, data) => {
//   return await TasksModel.findOneAndUpdate(
//     query,
//     { $set: data },
//     { new: true }
//   ).exec();
// };
// export const findAllTaskServices = async (query) => {
//   return await TasksModel.find(query).exec();
// };
// export const deleteOneServices = async (query) => {
//   return await TasksModel.findOneAndDelete(query).exec();
// };
// export const deleteAllServices = async (query) => {
//   return await TasksModel.remove(query).exec();
// };
// tasks.services.js



const validateTaskData = async (taskData) => {
  try {
    await taskValidationSchema.validateAsync(taskData);
  } catch (error) {
    throw new Error(error.details.map((err) => err.message).join(', '));
  }
};

export const createTaskServices = async (taskData) => {
  try {
    // Validate task data before creating a new task
    await validateTaskData(taskData);

    const newTask = new TasksModel(taskData);
    return await newTask.save();
  } catch (error) {
    // Handle validation errors or any other errors
    throw new Error(`Error creating task: ${error.message}`);
  }
};

export const findOneTaskService = async (query) => {
  return await TasksModel.findOne(query).exec();
};

export const updateTaskService = async (query, data) => {
  try {
    // Validate task data before updating
    await validateTaskData(data);

    return await TasksModel.findOneAndUpdate(
      query,
      { $set: data },
      { new: true }
    ).exec();
  } catch (error) {
    // Handle validation errors or any other errors
    throw new Error(`Error updating task: ${error.message}`);
  }
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

