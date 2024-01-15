import express from "express";
import { createUser } from "./userController.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  return res.status(200).send("okkkk");
});
userRouter.post("/createUser", createUser);
export default userRouter;
