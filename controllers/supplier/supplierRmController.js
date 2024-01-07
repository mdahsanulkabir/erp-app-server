const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSupplierRm = async (req, res) => {
    
}

const createManySupplierRm = async (req, res) => {
    const someSupplierRm = [...req.body];
    try {
        // console.log(someSupplierRm)
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })
        let allSupplierRm = []
        someSupplierRm.forEach(async (supplierRm) => {
            const newSupplierRM = await prisma.supplierRM.create({
                data: {
                    RM: {
                        connect: {
                            id: supplierRm.objectId
                        }
                    },
                    Supplier: {
                        connect: {
                            id: supplierRm.supplierId
                        }
                    },
                    SupplierRmUnit: {
                        connect: {
                            id: supplierRm.supplierRmUnitId
                        }
                    },
                    Currency: {
                        connect: {
                            id: supplierRm.currencyId
                        }
                    },
                    User: {
                        connect: {
                            id: user.id
                        }
                    },
                },
            })
            allSupplierRm.push({...newSupplierRM})
        })
        console.log(allSupplierRm)
        res.status(201).json({success: `new supplier rms created`, allSupplierRm})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getSupplierRm = async (req, res) => {

}


module.exports = {
    createSupplierRm,
    getSupplierRm,
    createManySupplierRm
}