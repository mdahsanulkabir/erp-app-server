const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProductCapacityUnit = async (req, res) => {
  const { productCapacityUnit } = req.body;
  console.log(productCapacityUnit);

  // const duplicateProductCapacityUnit = await prisma.productCapacityUnit.findUnique({
  //     where: {
  //         productCapacityUnit,
  //     },
  // })
  // if (duplicateProductCapacityUnit) return res.status(409).json({ 'Message': "Duplicate Product Capacity Unit found." });

  try {
    const newProductCapacityUnit = await prisma.productCapacityUnit.create({
      data: {
        productCapacityUnit,
      },
    });
    console.log({ newProductCapacityUnit });
    res
      .status(201)
      .json({
        success: `New Product Category Unit created!`,
        newProductCapacityUnit,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};

const getAllProductCapacityUnit = async (req, res) => {
  try {
    const allProductCapacityUnit = await prisma.productCapacityUnit
      .findMany
      // {
      //     include: {
      //         roles: true
      //     }
      // }
      ();
    res.status(200).json(allProductCapacityUnit);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProductCapacityUnit,
  getAllProductCapacityUnit,
};
