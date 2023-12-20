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
    const { departmentName } = req.body;
    try {
        const newDepartment = await prisma.department.create({
            data: {
                departmentName
            },
        })
        console.log({...newDepartment})
        res.status(201).json({ 'success': `New department created!`, newDepartment });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    getAllDepartments,
    createDepartment
}