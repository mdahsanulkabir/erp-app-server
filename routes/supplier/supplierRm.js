const express = require('express');
const router = express.Router();
const supplierRm = require('../../controllers/supplier/supplierRmController')

router
    .route("/")
    .get(supplierRm.getSupplierRm)
    .post(supplierRm.createSupplierRm);

router
    .route("/createMany")
    .post(supplierRm.createManySupplierRm);


module.exports = router;