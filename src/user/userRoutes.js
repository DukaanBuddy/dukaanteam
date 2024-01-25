import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "./userController.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.status(200).send("okkkk");
});
userRouter.post("/api/create", createUser);
userRouter.get("/getUser/:bussinessUuid", getUser);
userRouter.put("/updateUser/:bussinessUuid", updateUser);
userRouter.delete("/deleteUser/:bussinessUuid", deleteUser);
export default userRouter;
