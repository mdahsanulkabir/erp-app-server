const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createRmSource = async (req, res) => {
    const { rmSource } = req.body;
    const duplicateRmSource = await prisma.rmSource.findUnique({
        where: {
            rmSource,
        },
    })
    if (duplicateRmSource) return res.status(409).json({ 'Message': "Duplicate RM Source found." });

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })
        const newRmSource = await prisma.rmSource.create({
            data : {
                rmSource,
                createdBy: user.id
            }
        })
        console.log({...newRmSource})
        res.status(201).json({ 'success': `New RM unit created!`, newRmSource });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const getAllRmSource = async (req, res) => {
    try {
        const allRmSource = await prisma.rmSource.findMany()
        res.status(200).json(allRmSource)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    createRmSource,
    getAllRmSource
}