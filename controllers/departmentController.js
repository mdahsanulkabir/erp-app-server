const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const getAllDepartments = async (req, res) => {
    try {
        const allDept = await prisma.department.findMany()
        res.status(200).json(allDept)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}


const createDepartment = async (req, res) => {
    console.log(req.body)
    const { departmentName, description='none' } = req.body;
    const duplicateDepartment = await prisma.department.findUnique({
        where: {
            departmentName,
        },
    })
    if (duplicateDepartment) return res.status(409).json({ 'Message': "Duplicate Department found." });
    try {
        const newDepartment = await prisma.department.create({
            data: {
                departmentName,
                description
            },
        })
        console.log({...newDepartment})
        res.status(201).json({ 'success': `New department created!`, newDepartment });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const deleteDepartment = async (req, res) => {
    console.log(req.body)
    const { id } = req.body;
    try {
        const deletedDepartment = await prisma.department.delete({
            where: {
                id
            },
        })
        console.log({...deletedDepartment})
        res.status(201).json({ 'success': `Department deleted!`, deletedDepartment });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const updateDepartment = async (req, res) => {
    console.log(req.body);
    const { id, dataForUpdate } = req.body;
    try {
        const updatedDepartment = await prisma.department.update({
            where: {
                id
            },
            data: {
                ...dataForUpdate
            }
        })
        console.log({...updatedDepartment})
        res.status(201).json({ 'success': `Department Updated!`, updatedDepartment });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    getAllDepartments,
    createDepartment,
    deleteDepartment,
    updateDepartment
}