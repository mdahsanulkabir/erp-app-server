const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createFixedMRPBOM = async (req, res) => {
    const { productCode, rms } = req.body;
    const duplicateFixedMRPBOM = await prisma.mRPBOMFIXED.findFirst({
        where: {
            skuCode: productCode
        }
    })
    if(duplicateFixedMRPBOM)
    return res.status(409).json({ Message:"Duplicate Fixed MRP BOM found."});

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })

        //create Fixed-MRP-BOM
        let newFixedMRPBOM = []
        rms.forEach( async (rm) => {
            let myData = await prisma.mRPBOMFIXED.create({
                data: {
                    SKU: {
                        connect: {
                            id: productCode
                        }
                    },
                    RM: {
                        connect: {
                            id: rm.id
                        }
                    },
                    rmQuantity: Number.parseFloat(rm.quantity.toFixed(5)),
                    User: {
                        connect: {
                            id: user.id
                        }
                    }
                },
                include: {
                    SKU: true,
                    RM: true
                }
            })
            // newFixedMRPBOM.push(myData)
        })
        
        
        res
          .status(201)
          .json({
            success: `we got the data`, newFixedMRPBOM
          });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
      return;
}
const getFixedMRPBOM = async (req, res) => {
    console.log("hello")
}
module.exports = {
    createFixedMRPBOM,
    getFixedMRPBOM
}