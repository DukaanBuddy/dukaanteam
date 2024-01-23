import {
    createTaskServices,
    findOneTaskService,
    updateTaskService,
    findAllTaskServices,
    deleteOneServices,
    deleteAllServices,
} from "./expencesServices.js";
import { v4 as uuidv4 } from "uuid";
export const createTask = async (req, res) => {
    try {
        const data = req.body;
        data["bussinessUuid"] = uuidv4();
        const newTask = await createTaskServices(data);
        return res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const { bussinessUuid } = req.params;
        const result = await findOneTaskService({ bussinessUuid });
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error ", error);
        return res.status(500).send(error);
    }
};
export const getAllTask = async (req, res) => {
    try {
        const { params } = req;
        const { bussinessUuid } = params;
        const result = await findAllTaskServices({ bussinessUuid });
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send(error);
    }
};

export const updateTask = async (req, res) => {
    try {
        const { params, body } = req;
        const { bussinessUuid } = params;
        const result = await updateTaskService({ bussinessUuid }, body);
        return res.status(200).send(result);
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send(error);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { params } = req;
        const { bussinessUuid } = params;
        await deleteOneServices({ bussinessUuid });
        return res.status(200).send("Deleted SuccessFully");
    } catch (error) {
        console.log("Error", error);
        return res.status(500).send(error);
    }
};
