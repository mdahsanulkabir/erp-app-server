const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fs = require('fs')
const path = require('path')
let rms = []
fs.readFile(path.join(__dirname, '3rdPartySKUsSanitized.json'), 'utf8', (err, data) => {
  if(err) throw err;
  rms = JSON.parse(data)
})


const loadRms = async (req, res) => {
    const user = await prisma.user.findFirst({
        where :{
            userEmail: req.user
        }
    })
    let newRms = []
    try {
        const newRm = rms.forEach(async (rm) =>  {

            await prisma.rM.create({
                data: {
                    objectId: rm.objectId.toString(),
                    sisCode: rm.sisCode,
                    sapCode: rm.sapCode.toString(),
                    objectName: rm.objectName,
                    alternativeName: rm.alternativeName,
                    rmUnit : {
                        connect: {
                            id: rm.rmUnitId
                        },
                    },
                    User: {
                        connect: {
                            id: user.id
                        },
                    } 
                },
                include: {
                    User: true,
                    rmUnit: true
                }
            });
            newRms.push(newRm)
        });
    
        console.log({ newRms });
        res.status(201).json({
            success: `New Product rms created!`,
            newRms,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    loadRms
}