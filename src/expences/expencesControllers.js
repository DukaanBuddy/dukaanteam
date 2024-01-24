import {
  createExpenceServices,
  findOneExpenceService,
  updateExpenceService,
  deleteOneExpenceServices,
  findAllExpenceServices,
  deleteAllServices,
} from "./expencesServices.js";
import { v4 as uuidv4 } from "uuid";
export const createExpence = async (req, res) => {
  try {
    const data = req.body;
    // data["bussinessUuid"] = uuidv4();
    const newExpence = await createExpenceServices(data);
    return res.status(201).json(newExpence);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export const getExpence = async (req, res) => {
  try {
    const { bussinessUuid } = req.params;
    const result = await findOneExpenceService({ bussinessUuid });
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error ", error);
    return res.status(500).send(error);
  }
};
export const getAllExpence = async (req, res) => {
  try {
    const { params } = req;
    const { bussinessUuid } = params;
    const result = await findAllExpenceServices({ bussinessUuid });
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error", error);
    return res.status(500).send(error);
  }
};

export const updateExpence = async (req, res) => {
  try {
    const { params, body } = req;
    const { bussinessUuid } = params;
    const result = await updateExpenceService({ bussinessUuid }, body);
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error", error);
    return res.status(500).send(error);
  }
};

export const deleteExpence = async (req, res) => {
  try {
    const { params } = req;
    const { bussinessUuid } = params;
    await deleteOneExpenceServices({ bussinessUuid });
    return res.status(200).send("Deleted SuccessFully");
  } catch (error) {
    console.log("Error", error);
    return res.status(500).send(error);
  }
};
