const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProductSourceCategory = async (req, res) => {
  const { sourceCategory, productBaseId } = req.body;
  console.log({sourceCategory, productBaseId});

  // const duplicateProductCapacityUnit = await prisma.productCapacityUnit.findUnique({
  //     where: {
  //         productCapacityUnit,
  //     },
  // })
  // if (duplicateProductCapacityUnit) return res.status(409).json({ 'Message': "Duplicate Product Capacity Unit found." });

  try {
    const newProductSourceCategory = await prisma.sourceCategory.create({
      data: {
        sourceCategory,
        productBase: {
            connect: {
                id: productBaseId,
            },
        },
      },
      include: {
        productBase: true
      }
    });
    console.log({ newProductSourceCategory });
    res
      .status(201)
      .json({
        success: `New Product Source Category created!`,
        newProductSourceCategory,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};

const getAllProductSourceCategory = async (req, res) => {
  try {
    const allProductSourceCategory = await prisma.sourceCategory
      .findMany(
      {
          include: {
            productBase: true
          }
      }
      );
    res.status(200).json(allProductSourceCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    createProductSourceCategory,
    getAllProductSourceCategory,
};
