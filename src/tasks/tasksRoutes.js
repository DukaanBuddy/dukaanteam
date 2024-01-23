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
taskRouter.get("/getTask/:bussinessUuid", getTask);
taskRouter.get("/getAllTask/:bussinessUuid", getAllTask);
taskRouter.put("/updateTask/:bussinessUuid", updateTask);
taskRouter.delete("/deleteTask/:bussinessUuid", deleteTask);
export default taskRouter;