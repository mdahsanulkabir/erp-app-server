const express = require("express");
const router = express.Router();
const sfgBOM = require("../../controllers/sfgBOM/sfgBOMDefinitionController")



router
    .route("/sfgBomDefinition")
    .get(sfgBOM.getAllSfgBOMDefinition)
    .post(sfgBOM.createSfgBOMDefinition);

module.exports = router;