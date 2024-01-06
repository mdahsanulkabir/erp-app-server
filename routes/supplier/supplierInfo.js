const express = require('express');
const router = express.Router();
const externalContacts = require('../../controllers/supplier/externalContactsController')
const supplierList = require('../../controllers/supplier/supplierListController')

router
    .route("/contact")
    .get(externalContacts.getExternalContact)
    .post(externalContacts.createExternalContact);

router
    .route("/list")
    .get(supplierList.getSupplier)
    .post(supplierList.createSupplier);

module.exports = router;