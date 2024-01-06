const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSupplier = async (req, res) => {
    const { supplierName, supplierAlternateName, country, rmSourceId } = req.body;
    console.log(req.body)
    const duplicateSupplier = await prisma.supplier.findFirst({
        where: {
            supplierName
        }
    })
    if(duplicateSupplier)
        return res.status(409).json({ Message:"Duplicate supplier found."});

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })

        const newSupplier = await prisma.supplier.create({
            data: {
                supplierName,
                supplierAlternateName,
                country,
                RmSource: {
                    connect: {
                        id: rmSourceId
                    }
                },
                User: {
                    connect: {
                        id: user.id
                    }
                },
                include: {
                    RmSource: true
                }
            }
        })
        res.status(201).json({success: `new supplier created`, newSupplier})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getSupplier = async (req, res) => {
    try {
        const allSuppliers = await prisma.supplier.findMany({
            include: {
                RmSource: true
            }
        });
        res.status(200).json(allSuppliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createSupplier,
    getSupplier
}