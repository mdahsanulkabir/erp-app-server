const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSKU = async (req, res) => {
  const { 
    skuCode,
    productVariantId,
    productBaseId,
    productCapacity,
    seriesCategoryId,
    feature = null,
    picture1 = "",
    picture2 = "",
    picture3 = "",
    picture4 = "",
    picture5 = "" } = req.body;
  console.log({
    skuCode,
    productVariantId,
    productBaseId,
    productCapacity: parseInt(productCapacity),
    seriesCategoryId,
    feature,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5});

  const duplicateSKU = await prisma.sKU.findUnique({
      where: {
        skuCode,
      },
  })
  if (duplicateSKU) return res.status(409).json({ 'Message': "Duplicate SKU found." });

  try {
    const newSKU = await prisma.sKU.create({
      data: {
        skuCode,
        skuSAPCode: skuCode,
        variant: {
            connect: {
                id: productVariantId,
            },
        },
        productBase: {
            connect: {
                id: productBaseId,
            },
        },
        productCapacity: parseInt(productCapacity),
        SeriesCategory : {
            connect: {
                id: seriesCategoryId
            }
        },
      },
      include: {
        variant: true,
        productBase: true,
        SeriesCategory: true
      }
    });
    console.log({ newSKU });
    res
      .status(201)
      .json({
        success: `New Product SKU created!`,
        newSKU,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};

const getAllSKU = async (req, res) => {
  try {
    const allSKUs = await prisma.sKU
      .findMany(
      {
          include: {
            variant: true,
            productBase: true,
            SeriesCategory: true
          }
      }
      );
    const allSkuData = allSKUs.map(allSKU => ({
      skuId: allSKU.id,
      skuCode: allSKU.skuCode,
      skuSAPCode: allSKU.skuSAPCode,
      productVariantId: allSKU.productVariantId,
      productVariant: allSKU.variant.productVariant,
      productBaseId: allSKU.productBaseId,
      baseProduct: allSKU.productBase.baseProduct,
      productCapacity: allSKU.productCapacity,
      productCapacityUnitId: allSKU.productBase.productCapacityUnitId,
      seriesCategoryId: allSKU.seriesCategoryId,
      seriesName: allSKU.SeriesCategory.seriesName,
      feature: allSKU.feature,
      picture1: allSKU.picture1,
      picture2: allSKU.picture2,
      picture3: allSKU.picture3,
      picture4: allSKU.picture4,
      picture5: allSKU.picture5,
      obsolete: allSKU.obsolete,
      comment: allSKU.comment
    }))
    res.status(200).json(allSkuData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    createSKU,
    getAllSKU,
};
