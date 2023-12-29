const express = require("express");
const router = express.Router();

const skus = require("./sku/loadSkus")
const rms = require("./rm/rm")
const sfgboms=require("./sfg/sfg")

router.get('/skus', skus.printSkus);
router.post('/skus', skus.createManySKUs)
router.post('/loadRms', rms.loadRms)
router.post('/loadSFGBOM', sfgboms.loadSFGBOM)

module.exports = router;
