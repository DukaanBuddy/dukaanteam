import express from "express";
const paymentRouter = express.Router();
import PaytmChecksum from "../PaytmChecksum";
paymentRouter.post("/api/payment", paymentCreate);


export default userRouter;