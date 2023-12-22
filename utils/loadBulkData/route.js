const express = require("express");
const router = express.Router();

const skus = require("./sku/loadSkus")

router.get('/skus', skus.printSkus);
router.post('/skus', skus.createManySKUs)

module.exports = router;
