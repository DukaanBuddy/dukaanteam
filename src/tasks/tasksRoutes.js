import express from "express";
import {
  createTask,
  getTask,
  getAllTask,
  updateTask,
  deleteTask,
} from "./tasksControllers";
const taskRouter = express.Router();

// expenceRouter.get("/", (req, res) => {
//     return res.status(200).send("okkkk");
// });
taskRouter.post("/create", createTask);
taskRouter.get("/getTask/:bussinessUuid/:taskId", getTask);
taskRouter.get("/getAllTask/:bussinessUuid/:taskId", getAllTask);
taskRouter.put("/updateTask/:bussinessUuid/:taskId", updateTask);
taskRouter.delete("/deleteTask/:bussinessUuid/:taskId", deleteTask);
export default taskRouter;
