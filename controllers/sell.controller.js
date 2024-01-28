const { v4: uuidv4 } = require("uuid");
const {
  createSellServices,
  findAllSellServices,
} = require("../services/sellService");

const createSell = async (req, res) => {
  try {
    let data = req.body;
    //   check all fields if bussinessUuid not here add from request params
    data["transactionID"] = uuidv4();
    const result = await createSellServices(data);
    return res.status(201).json(result);
  } catch (error) {
    console.error("Error creating sell:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllSells = async (req, res) => {
  const { bussinessUuid } = req.params;
  const result = findAllSellServices({ bussinessUuid });
  return res.status(200).send(result);
};
module.exports = {
  createSell,
  getAllSells,
};
