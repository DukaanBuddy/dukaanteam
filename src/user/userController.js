import userModel from "./userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
