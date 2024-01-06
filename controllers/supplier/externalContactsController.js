const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createExternalContact = async (req, res) => {
    const { name, email, phone, supplierId } = req.body;
    // res.status(200).json({name, email, phone, supplierId})
    const duplicateExternalContact = await prisma.externalContact.findFirst({
        where: {
            email
        }
    })
    if(duplicateExternalContact)
        return res.status(409).json({ Message:"Duplicate External Contact found."});
    // else console.log("no duplicate")

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
            },
            include: {
                Supplier: true
            }
        })
        console.log(newExternalContact)
        res.status(201).json({success: `new external contact created`, newExternalContact})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getExternalContact = async (req, res) => {
    try {
        const allExtContact = await prisma.externalContact.findMany({
            include: {
                Supplier: true
            }
        });
        res.status(200).json(allExtContact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createExternalContact,
    getExternalContact
}