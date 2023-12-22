const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await prisma.user.findMany({
            include: {
                roles: true,
                userDepartment: true
            }
        })
        res.status(200).json(allUsers)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const updateUser = async (req, res) => {
    const {id, roles} = req.body;
    console.log({id, roles})
    const roleIds = roles.map(roleId => ({ id: roleId }));
    try {
        const updateUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                roles: {
                    set: roleIds
                },
            },
            include: {
                roles: true
            }
        })
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const updateUserStatus = async (req, res) => {
    const {id, status} = req.body;
    console.log({id, status})
    try {
        const updateUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                status
            },
        })
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    getAllUsers,
    updateUser,
    updateUserStatus
}