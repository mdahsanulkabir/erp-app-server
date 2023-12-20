const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProductSeries = async (req, res) => {
  const { seriesName } = req.body;
  console.log(seriesName);

  // const duplicateProductCapacityUnit = await prisma.productCapacityUnit.findUnique({
  //     where: {
  //         productCapacityUnit,
  //     },
  // })
  // if (duplicateProductCapacityUnit) return res.status(409).json({ 'Message': "Duplicate Product Capacity Unit found." });

  try {
    const newProductSeries = await prisma.seriesCategory.create({
      data: {
        seriesName,
      },
    });
    console.log({ newProductSeries });
    res
      .status(201)
      .json({
        success: `New Product Series created!`,
        newProductSeries,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};

const getAllProductSeries = async (req, res) => {
  try {
    const allProductSeries = await prisma.seriesCategory
      .findMany
      // {
      //     include: {
      //         roles: true
      //     }
      // }
      ();
    res.status(200).json(allProductSeries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    createProductSeries,
    getAllProductSeries,
};
