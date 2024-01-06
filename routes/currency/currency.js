const express = require("express");
const router = express.Router();
const currency = require("../../controllers/currency/currencyController");

router
    .route("/")
    .get(currency.getCurrency)
    .post(currency.createCurrency);

module.exports = router;