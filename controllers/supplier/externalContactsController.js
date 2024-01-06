const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createExternalContact = async (req, res) => {
    const { name, email, phone, supplierId } = req.body;
    const duplicateExternalContact = await prisma.externalContact.findFirst({
        where: {
            email
        }
    })
    if(duplicateExternalContact)
        return res.status(409).json({ Message:"Duplicate External Contact found."});

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })

        const newExternalContact = await prisma.externalContact.create({
            data: {
                name,
                email,
                phone,
                Supplier: {
                    connect: {
                        id: supplierId
                    }
                },
                User: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })
        res.status(201).json({success: `new external contact created`, newExternalContact})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getExternalContact = async (req, res) => {

}

module.exports = {
    createExternalContact,
    getExternalContact
}