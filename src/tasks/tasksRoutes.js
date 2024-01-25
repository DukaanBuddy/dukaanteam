import express from "express";
import {
<<<<<<< HEAD
    createTask,
    getTask,
    getAllTask,
    updateTask,
    deleteTask,
} from "./tasksControllers.js";
=======
  createTask,
  getTask,
  getAllTask,
  updateTask,
  deleteTask,
} from "./tasksControllers";
>>>>>>> 0ca20ff417658824ad507e74cb37ee39ac07bd44
const taskRouter = express.Router();

// expenceRouter.get("/", (req, res) => {
//     return res.status(200).send("okkkk");
// });
<<<<<<< HEAD
taskRouter.post("/api/createTask", createTask);
taskRouter.get("/getTask/:bussinessUuid", getTask);
taskRouter.get("/getAllTask/:bussinessUuid", getAllTask);
taskRouter.put("/updateTask/:bussinessUuid", updateTask);
taskRouter.delete("/deleteTask/:bussinessUuid", deleteTask);
=======
taskRouter.post("/create", createTask);
taskRouter.get("/getTask/:bussinessUuid/:taskId", getTask);
taskRouter.get("/getAllTask/:bussinessUuid/:taskId", getAllTask);
taskRouter.put("/updateTask/:bussinessUuid/:taskId", updateTask);
taskRouter.delete("/deleteTask/:bussinessUuid/:taskId", deleteTask);
>>>>>>> 0ca20ff417658824ad507e74cb37ee39ac07bd44
export default taskRouter;
