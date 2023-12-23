const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createRmDefinition = async (req, res) => {
    const { 
        objectId,
        sisCode,
        sapCode,
        objectName,
        alternativeName = null,
        rmUnitId,
        picture1 = null,
        picture2 = null,
        picture3 = null,
        picture4 = null,
        picture5 = null,
        comment = null
    } = req.body;
    const duplicateRmDefinition = await prisma.rM.findFirst({
        where: {
            objectId: objectId.toString(),
        },
    })
    if (duplicateRmDefinition) return res.status(409).json({ 'Message': "Duplicate RM Definition found." });

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })
        const newRmDefinition = await prisma.rM.create({
            data : {
                objectId: objectId.toString(),
                sisCode,
                sapCode: sapCode.toString(),
                objectName,
                alternativeName,
                rmUnit : {
                    connect: {
                        id: rmUnitId
                    },
                },
                picture1,
                picture2,
                picture3,
                picture4,
                picture5,
                comment,
                User: {
                    connect: {
                        id: user.id
                    },
                } 
            },
            include: {
                rmUnit: true
            }
        })
        console.log({...newRmDefinition})
        res.status(201).json({ 'success': `New RM created!`, newRmDefinition });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const getAllRmDefinition = async (req, res) => {
    try {
        const allRmDefinition = await prisma.rM.findMany()
        res.status(200).json(allRmDefinition)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const updateRMDefinitionSource = async (req, res) => {
    const { rmId, rmSource, updateReasons } = req.body;
    
    try {
        // console.log(req.body)
        // res.status(200).json(req.body)
        const updatedRmDefinitionSource = await prisma.rM.update({
            where: {
                id: rmId
            },
            data: {
                rmSource: {
                    connect: rmSource.map(sourceId => ({ id: sourceId })),
                },
                updateReasons
            },
        })
        console.log({...updatedRmDefinitionSource})
        res.status(201).json({ 'success': `RM definition Updated!`, updatedRmDefinitionSource });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const updateRMDefinitionCategory = async (req, res) => {
    const { rmId, rmCategory, updateReasons } = req.body;
    
    try {
        // console.log(req.body)
        // res.status(200).json(req.body)
        const updatedRmDefinitionCategory = await prisma.rM.update({
            where: {
                id: rmId
            },
            data: {
                rmSource: {
                    connect: rmCategory.map(categoryId => ({ id: categoryId })),
                },
                updateReasons
            },
        })
        console.log({...updatedRmDefinitionCategory})
        res.status(201).json({ 'success': `RM definition Updated!`, updatedRmDefinitionCategory });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    createRmDefinition,
    getAllRmDefinition,
    updateRMDefinitionSource,
    updateRMDefinitionCategory
}