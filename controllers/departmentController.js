const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const getAllDepartments = async (req, res) => {
    try {
        const allDept = await prisma.department.findMany()
        res.send(allDept)
    } catch (err) {
        console.log(err)
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
        res.send(newDepartment)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllDepartments,
    createDepartment
}