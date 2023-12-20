const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSKU = async (req, res) => {
  const { skuCode,
    productVariantId,
    productBaseId,
    productCapacity,
    seriesCategoryId,
    feature,
    picture1,
    picture2,
    picture3,
    picture4,
    picture5 } = req.body;
  console.log({skuCode,
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

  // const duplicateProductCapacityUnit = await prisma.productCapacityUnit.findUnique({
  //     where: {
  //         productCapacityUnit,
  //     },
  // })
  // if (duplicateProductCapacityUnit) return res.status(409).json({ 'Message': "Duplicate Product Capacity Unit found." });

  try {
    const newSKU = await prisma.sKU.create({
      data: {
        skuCode,
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
    res.status(200).json(allSKUs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    createSKU,
    getAllSKU,
};
