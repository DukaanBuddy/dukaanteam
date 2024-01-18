import express from "express";
import { createUser, getUser, updateUser } from "./userController.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.status(200).send("okkkk");
});
userRouter.post("/create", createUser);
userRouter.get("/:bussinessUuid", getUser);
userRouter.put("/:bussinessUuid", updateUser);
export default userRouter;
