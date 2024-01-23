import express from "express";
import {
    createExpence,
    getExpence,
    getAllExpence,
    updateExpence,
    deleteExpence,
} from "./expencesControllers";
const expenceRouter = express.Router();

// expenceRouter.get("/", (req, res) => {
//     return res.status(200).send("okkkk");
// });
expenceRouter.post("/create", createExpence);
expenceRouter.get("/getExpence/:bussinessUuid", getExpence);
expenceRouter.get("/getAllExpence/:bussinessUuid", getAllExpence);
expenceRouter.put("/updateExpence/:bussinessUuid", updateExpence);
expenceRouter.delete("/deleteExpence/:bussinessUuid", deleteExpence);
export default expenceRouter;
