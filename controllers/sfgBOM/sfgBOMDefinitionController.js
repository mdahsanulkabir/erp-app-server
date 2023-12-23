const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createSfgBOMDefinition = async (req, res) => {
    const { sfgObjectId, components } = req.body;

    const duplicateSfgBOMDefinition = await prisma.sFGBOM.findFirst({
        where: {
            sfgObjectId: sfgObjectId.toString(),
        },
    });
    if (duplicateSfgBOMDefinition) 
        return res.status(409).json({ Message:"Duplicate SFG Definition found."});

    try {
        const user = await prisma.user.findFirst({
            where :{
                userEmail: req.user
            }
        })
        // Create SFGBOM entry
        const createdSFGBOM = await prisma.sFGBOM.create({
            data: {
                sfg: { 
                    connect: { 
                        id: sfgObjectId 
                    } 
                },
                components: {
                    create: components.map((component) => ({
                        component: { 
                            connect: { 
                                id: component.componentObjectId 
                            } 
                        },
                        componentQuantity: component.componentQuantity,
                        User: { 
                            connect: { 
                                id: user.id
                            },
                        },
                    })),
                },
                User: { 
                    connect: { 
                        id: user.id
                    },
                },
            },
            include: {
                components: true,
            },
        });

        res.status(201).json({ success: "SFGBOM entry created!", createdSFGBOM });
        // console.log({ sfgObjectId, components })
        // res.status(201).json({ success: "SFGBOM entry created!",   sfgObjectId, components });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllSfgBOMDefinition = async (req, res) => {

}

module.exports = {
    createSfgBOMDefinition,
    getAllSfgBOMDefinition
};
