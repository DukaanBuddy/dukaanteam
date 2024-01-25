const express = require("express");
const { createUserServices } = require("../services/userServices");
const router = express.Router();

router.post("/create", createUserServices);
// router.get("/:bussinessUuid", getUser);
// router.put("/:bussinessUuid", updateUser);
// router.delete("/:bussinessUuid", deleteUser);
module.exports = router;
