const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const getAllRoles = async (req, res) => {
    try {
        const allRoles = await prisma.role.findMany()
        res.status(200).json(allRoles)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const createRole = async (req, res) => {
    const { id, roleName } = req.body;
    console.log(id, roleName)
    try {
        const newRole = await prisma.role.create({
            data: {
                id: parseInt(id),
                roleName
            }
        })
        console.log(newRole)
        res.status(201).json({ 'success': `New role created!`, newRole });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    getAllRoles,
    createRole
}