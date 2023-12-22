const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProductBase = async (req, res) => {
  const { baseProduct, productCapacityUnitId } = req.body;
  console.log({ baseProduct, productCapacityUnitId });

  const duplicateBaseProduct = await prisma.productBase.findUnique({
      where: {
        baseProduct,
      },
  })
  if (duplicateBaseProduct) return res.status(409).json({ 'Message': "Duplicate Product Base found." });

  try {
    const newProductBase = await prisma.productBase.create({
        data: {
            baseProduct,
            productCapacityUnit: {
              connect: {
                id: productCapacityUnitId,
              },
            },
          },
          include: {
            productCapacityUnit: true,
          },
    });
    console.log({ newProductBase });
    res
      .status(201)
      .json({
        success: `New Product Base created!`,
        newProductBase,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};

const getAllProductBase = async (req, res) => {
  try {
    const allProductBase = await prisma.productBase
      .findMany(
      {
          include: {
            productCapacityUnit: true
          }
      }
      );
      const modifiedResult = allProductBase.map((productBase) => ({
        id: productBase.id,
        baseProduct: productBase.baseProduct,
        productCapacityUnitId: productBase.productCapacityUnitId,
        productCapacityUnit: productBase.productCapacityUnit.productCapacityUnit
      }));
    res.status(200).json(modifiedResult);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    createProductBase,
    getAllProductBase,
};
