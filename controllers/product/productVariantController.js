const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProductVariant = async (req, res) => {
  const { productVariant } = req.body;
  console.log(productVariant);

  // const duplicateProductCapacityUnit = await prisma.productCapacityUnit.findUnique({
  //     where: {
  //         productCapacityUnit,
  //     },
  // })
  // if (duplicateProductCapacityUnit) return res.status(409).json({ 'Message': "Duplicate Product Capacity Unit found." });

  try {
    const newProductVariant = await prisma.productVariant.create({
      data: {
        productVariant,
      },
    });
    console.log({ newProductVariant });
    res.status(201).json({
      success: `New Product Color Variant created!`,
      newProductVariant,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};

const getAllProductVariant = async (req, res) => {
  try {
    const allProductVariant = await prisma.productVariant.findMany();
    res.status(200).json(allProductVariant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProductVariant,
  getAllProductVariant,
};
