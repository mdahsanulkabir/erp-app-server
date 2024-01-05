const express = require("express");
const router = express.Router();
const fixedMRPBOM = require("../../controllers/fixedMRPBOM/fixedMRPBOMController")

router
    .route("/mrpBom")
    .get(fixedMRPBOM.getFixedMRPBOM)
    .post(fixedMRPBOM.createFixedMRPBOM);

module.exports = router;