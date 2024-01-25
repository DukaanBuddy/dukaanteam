import express from "express";
import {
    createInventory,
    getInventory,
    updateInventory,
    getAllInventory,
    deleteInventory,
} from "./inventeryControllers.js";
const inventoryRouter = express.Router();

// expenceRouter.get("/", (req, res) => {
//     return res.status(200).send("okkkk");
// });
inventoryRouter.post("/api/createInventory", createInventory);
inventoryRouter.get("/getInventory/:bussinessUuid", getInventory);
inventoryRouter.get("/getAllInventory/:bussinessUuid", getAllInventory);
inventoryRouter.put("/updateInventory/:bussinessUuid", updateInventory);
inventoryRouter.delete("/deleteInventory/:bussinessUuid", deleteInventory);
export default inventoryRouter;
