const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fs = require('fs')
const path = require('path')
let rms = []
fs.readFile(path.join(__dirname, 'load1.json'), 'utf8', (err, data) => {
  if(err) throw err;
  rms = JSON.parse(data)
})


const loadSFGBOM = async (req, res) => {
    const user = await prisma.user.findFirst({
        where :{
            userEmail: req.user
        }
    })
    let newRms = []
    try {
        const newRm = rms.forEach(async (rm) =>  {

            await prisma.sFGBOM.create({
                data: {
                    sfg: { 
                        connect: { 
                            id: rm.sfgObjectId
                        },
                    },
                    components: {
                        create: rm.components.map((component) => ({
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
            newRms.push(newRm)
        });
    
        console.log({ newRms });
        res.status(201).json({
            success: `New BOMs created!`,
            newRms,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    loadSFGBOM
}