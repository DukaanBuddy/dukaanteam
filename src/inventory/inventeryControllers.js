import {
    createInventoryServices,
    findOneInventoryService,
    updateInventoryService,
    findAllInventoryServices,
    deleteOneInventoryServices,
    deleteAllServices,
} from "./inventryServices.js";
import { v4 as uuidv4 } from "uuid";
export const createInventory = async (req, res) => {
    try {
        const data = req.body;
        data["bussinessUuid"] = uuidv4();
        const newInventory = await createInventoryServices(data);
        return res.status(201).json(newInventory);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getInventory = async (req, res) => {
    try {
        const { bussinessUuid } = req.params;
        const result = await findOneInventoryService({ bussinessUuid });
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error ", error);
        return res.status(500).send(error);
    }
};

export const updateInventory = async (req, res) => {
    try {
        const { params, body } = req;
        const { bussinessUuid } = params;
        const result = await updateInventoryService({ bussinessUuid }, body);
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send(error);
    }
};

export const getAllInventory = async (req, res) => {
    try {
        const { params } = req;
        const { bussinessUuid } = params;
        const result = await findAllInventoryServices({ bussinessUuid });
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send(error);
    }
};

export const deleteInventory = async (req, res) => {
    try {
        const { params } = req;
        const { bussinessUuid } = params;
        await deleteOneInventoryServices({ bussinessUuid });
        return res.status(200).send("Deleted SuccessFully");
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send(error);
    }
};
