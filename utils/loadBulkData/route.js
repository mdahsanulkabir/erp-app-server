const express = require("express");
const router = express.Router();

const skus = require("./sku/loadSkus")
const rms = require("./rm/rm")

router.get('/skus', skus.printSkus);
router.post('/skus', skus.createManySKUs)
router.post('/loadRms', rms.loadRms)

module.exports = router;
