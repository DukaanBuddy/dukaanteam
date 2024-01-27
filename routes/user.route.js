const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  checkUserBusiness,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/check", checkUserBusiness);
userRouter.post("/create", createUser);
userRouter.get("/:bussinessUuid", getUser);
userRouter.put("/:bussinessUuid", updateUser);
userRouter.delete("/:bussinessUuid", deleteUser);
module.exports = userRouter;
