const express = require("express");
const router = express.Router();
const rmUnit = require("../../controllers/rm/rmUnitController");
const rmSource = require("../../controllers/rm/rmSourceController");

router
    .route("/rmUnit")
    .get(rmUnit.getAllRmUnit)
    .post(rmUnit.createRmUnit);

router
    .route("/rmSource")
    .get(rmSource.getAllRmSource)
    .post(rmSource.createRmSource);

module.exports = router;
