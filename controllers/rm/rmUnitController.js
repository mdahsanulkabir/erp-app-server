const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createRmUnit = async (req, res) => {
    const { rmUnit } = req.body;
    const duplicateRmUnit = await prisma.rmUnit.findUnique({
        where: {
            rmUnit,
        },
    })
    if (duplicateRmUnit) return res.status(409).json({ 'Message': "Duplicate RM unit found." });

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })
        const newRmUnit = await prisma.rmUnit.create({
            data : {
                rmUnit,
                createdBy: user.id
            }
        })
        console.log({...newRmUnit})
        res.status(201).json({ 'success': `New RM unit created!`, newRmUnit });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const getAllRmUnit = async (req, res) => {
    try {
        const allRmUnits = await prisma.rmUnit.findMany()
        res.status(200).json(allRmUnits)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    createRmUnit,
    getAllRmUnit
}