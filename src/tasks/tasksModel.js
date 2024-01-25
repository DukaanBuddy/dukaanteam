import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  // taskId: { type: String, required: true },
  taskName: { type: String },
  taskDescription: { type: String },
  assignedTo: { type: String },
  completedBy: { type: String },
  status: {
    type: String,
    enum: ["to_do", "inProgress", "completed"],
    default: "to_do",
  },
  taskPriority: { type: String },
  desiredTaskCompletionDate: { type: Date },
  actualTaskCompletionDate: { type: Date },
  tags: [{ type: String }],
  taskCreatedBy: { type: String },
  businessUuid: { type: String },
});

export default mongoose.model("Task", taskSchema);
