import {
  createUserServices,
  findOneUserService,
  updateUserService,
} from "./userServices.js";
import { v4 as uuidv4 } from "uuid";
export const createUser = async (req, res) => {
  try {
    const data = req.body;
    data["bussinessUuid"] = uuidv4();
    const newUser = await createUserServices(req.body);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { bussinessUuid } = req.params;
    const result = await findOneUserService({ bussinessUuid });
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error ");
    return res.status(500).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { params, body } = req;
    const { bussinessUuid } = params;
    console.log("bussinessUuid", body);
    const result = await updateUserService(bussinessUuid, body);
    console.log("result,re", result);
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error ");
    return res.status(500).send(error);
  }
};
