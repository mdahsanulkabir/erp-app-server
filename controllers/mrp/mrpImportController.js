const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createImportRmRequirementTag = async (req, res) => {
    const { importRmRequirementTag } = req.body;

    const duplicateImportRmRequirementTag = await prisma.importRmRequirementTag.findUnique({
        where: {
            importRmRequirementTag,
        },
    })
    if (duplicateImportRmRequirementTag) return res.status(409).json({ 'Message': "Duplicate Import RM Requirement Tag found." });
  
    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })
        const newImportRmRequirementTag = await prisma.importRmRequirementTag.create({
            data : {
                importRmRequirementTag,
                User: {
                    connect: {
                        id: user.id
                    },
                } 
            },
            include: {
                User: {
                    select: {
                        userName: true
                    }
                },
            }
        })
        console.log(newImportRmRequirementTag)
        res.status(201).json({ 'success': `New import rm requirement tag created!`, newImportRmRequirementTag });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}


const getImportRmRequirementTag = async (req, res) => {
    try {
        const allImportRmRequirementTag = await prisma.importRmRequirementTag.findMany({
            include: {
                User: {
                    select: {
                        userName: true
                    }
                },
            }
        })
        res.status(200).json(allImportRmRequirementTag)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    createImportRmRequirementTag,
    getImportRmRequirementTag,
}