const express = require('express');
const router = express.Router();

const mrpImport = require('../../controllers/mrp/mrpImportController');

router
    .route("/tag")
    .get(mrpImport.getImportRmRequirementTag)
    .post(mrpImport.createImportRmRequirementTag)



module.exports = router;