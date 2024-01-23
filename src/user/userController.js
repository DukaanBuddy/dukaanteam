import {
  createUserServices,
  deleteOneServices,
  findOneUserService,
  findAllUserServices,
  updateUserService,
} from "./userServices.js";
import { v4 as uuidv4 } from "uuid";
// import userValidationSchema from "./user.validator.js";


export const createUser = async (req, res) => {
  try {
    const data = req.body;
    data["bussinessUuid"] = uuidv4();
    const newUser = await createUserServices(data);
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
    console.log("Error ", error);
    return res.status(500).send(error);
  }
};
export const getAllUser = async (req, res) => {
  try {
    const { params } = req;
    const { bussinessUuid } = params;
    const result = await findAllUserServices({ bussinessUuid });
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error", error);
    return res.status(500).send(error);
  }
};


export const updateUser = async (req, res) => {
  try {
    const { params, body } = req;
    const { bussinessUuid } = params;
    const result = await updateUserService({ bussinessUuid }, body);
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error", error);
    return res.status(500).send(error);
  }
};

export const deleteUser = async (req, res) => {
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
