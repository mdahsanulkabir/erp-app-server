
const fs = require('fs')
const path = require('path')
let skuData = []
fs.readFile(path.join(__dirname, 'SKU.json'), 'utf8', (err, data) => {
  if(err) throw err;
  skuData = JSON.parse(data)
})

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const printSkus = async (req, res) => {
    try {
        
        res.status(200).json(mySQUs)
    } catch (err) {
        console.log(err)
    }
}

const createManySKUs = async (req, res) => {
    const skuData = mySQUs.map(({
      skuCode,
      productVariantId,
      productBaseId,
      productCapacity,
      seriesCategoryId
    }) => ({
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
      SeriesCategory: {
        connect: {
          id: seriesCategoryId,
        },
      },
    }));
  
    try {
      const newSKUs = await prisma.sKU.createMany({
        data: skuData,
      });
  
      console.log({ newSKUs });
      res.status(201).json({
        success: `New Product SKUs created!`,
        newSKUs,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
    printSkus,
    createManySKUs
};