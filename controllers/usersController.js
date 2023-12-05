const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
    try {
        const allRoles = await prisma.user.findMany()
        res.status(200).json(allRoles)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    getAllUsers
}