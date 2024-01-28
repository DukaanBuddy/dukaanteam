const {
  createBuyServices,
  findAllBuyServices,
} = require("../services/buyService");
const {
  findOneVendorService,
  createVendorServices,
} = require("../services/vendorsServices");
const { v4: uuidv4 } = require("uuid");

const createBuy = async (req, res) => {
  try {
    const { phone, fullName, ...remainingData } = req.body;
    const existingVendor = await findOneVendorService({ phone });
    if (existingVendor) {
      const { vendorUuid } = existingVendor;
      const dataForSave = {
        buyUuid: uuidv4(),
        supplierUuid: vendorUuid,
        ...remainingData,
      };
      const result = await createBuyServices(dataForSave);
      return res.status(201).send(result);
    } else {
      const dataForCreate = {
        fullName,
        phone,
        vendorUuid: uuidv4(),
      };
      const newVendor = await createVendorServices(dataForCreate);
      const dataForSave = {
        buyUuid: uuidv4(),
        supplierUuid: newVendor.vendorUuid,
        ...remainingData,
      };
      const result = await createBuyServices(dataForSave);
      return res.status(201).send(result);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

const getAllBoughts = async (req, res) => {
  const { bussinessUuid } = req.params;
  const result = await findAllBuyServices(bussinessUuid);
  return res.status(200).send(result);
};

module.exports = { createBuy, getAllBoughts };
