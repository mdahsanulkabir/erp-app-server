const express = require("express");
const router = express.Router();
const rmUnit = require("../../controllers/rm/rmUnitController");
const rmSource = require("../../controllers/rm/rmSourceController");
const rmDefinition = require('../../controllers/rm/rmDefinitionController')

router
    .route("/rmUnit")
    .get(rmUnit.getAllRmUnit)
    .post(rmUnit.createRmUnit);

router
    .route("/rmSource")
    .get(rmSource.getAllRmSource)
    .post(rmSource.createRmSource);

router
    .route("/rmDefinition")
    .get(rmDefinition.getAllRmDefinition)
    .post(rmDefinition.createRmDefinition);

router.patch("/rmDefinitionUpdate/source",rmDefinition.updateRMDefinitionSource);
router.patch("/rmDefinitionUpdate/category",rmDefinition.updateRMDefinitionCategory);


module.exports = router;
