import express from "express";
const userRouter = express.Router();
import { createUser } from "../controller/user.controller.js";
// const midAuth = require ("../middleware/auth")
// import { authentication, authorisation } from "../middleware/auth.js"

userRouter.post("/api/createUser", createUser);

// userRouter.get("/api/getCustomer", getCustomerByquery);

// userRouter.put("/api/updateHr/:hrId",updateHr);

// userRouter.delete("/api/deleteHr/:hrId", DeleteCustomer)

export default userRouter;