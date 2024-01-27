const {
  createUserServices,
  findOneUserService,
  updateUserService,
  // findAllUserServices,
  deleteOneServices,
  checkUserHasBusiness,
  //   deleteAllServices,
} = require("../services/userServices");
const { v4: uuidv4 } = require("uuid");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const exist = await findOneUserService(data);
    if (exist) {
      return res.status(200).send(exist);
    } else {
      data["bussinessUuid"] = uuidv4();
      const newUser = await createUserServices(data);
      return res.status(201).json(newUser);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

const checkUserBusiness = async (req, res) => {
  try {
    const data = req.body;
    const user = await checkUserHasBusiness(data);
    if (user?.bussinessUuid) {
      return res.status(200).send({hasBusiness: true,uid:user?.bussinessUuid});
    }
    res.send({hasBusinees: false})
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { bussinessUuid } = req.params;
    const result = await findOneUserService({ bussinessUuid });
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error ", error);
    return res.status(500).send(error);
  }
};
// export const getAllUser = async (req, res) => {
//   try {
//     const { params } = req;
//     const { bussinessUuid } = params;
//     const result = await findAllUserServices({ bussinessUuid });
//     return res.status(200).send(result);
//   } catch (error) {
//     console.log("Error", error);
//     return res.status(500).send(error);
//   }
// };

const updateUser = async (req, res) => {
  try {
    const { params, body } = req;
    const { bussinessUuid } = params;
    // console.log("update api ", body);
    //   use validation in fronted
    const result = await updateUserService({ bussinessUuid }, body);
    return res.status(200).send(result);
  } catch (error) {
    console.log("Error", error);
    return res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
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

module.exports = { createUser, getUser, updateUser, deleteUser ,checkUserBusiness};
