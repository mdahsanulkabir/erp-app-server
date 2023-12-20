const express = require("express");
const router = express.Router();
const productCapacityUnit = require("../../controllers/product/productCapacityUnitController");
const productVariant = require("../../controllers/product/productVariantController");
const productSeries = require("../../controllers/product/productSeriesController");
const productSourceCategory = require("../../controllers/product/productSourceCategoryController");
const productBase = require("../../controllers/product/productBaseController");
const sku = require("../../controllers/product/skuController");


router.post('/createProductCapacityUnit', productCapacityUnit.createProductCapacityUnit);
    
router.get('/getProductCapacityUnit', productCapacityUnit.getAllProductCapacityUnit);

router
    .route("/productVariant")
    .post(productVariant.createProductVariant)
    .get(productVariant.getAllProductVariant)
    
router
    .route("/productSeries")
    .post(productSeries.createProductSeries)
    .get(productSeries.getAllProductSeries)

router
    .route("/productSourceCategory")
    .post(productSourceCategory.createProductSourceCategory)
    .get(productSourceCategory.getAllProductSourceCategory)

router
    .route("/productBase")
    .post(productBase.createProductBase)
    .get(productBase.getAllProductBase)

router
    .route("/sku")
    .post(sku.createSKU)
    .get(sku.getAllSKU)

module.exports = router;