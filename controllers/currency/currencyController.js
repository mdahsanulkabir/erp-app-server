const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCurrency = async (req, res) => {
    const { currency } = req.body;
    const duplicateCurrency = await prisma.currency.findFirst({
        where: {
            currency
        }
    })
    if(duplicateCurrency)
    return res.status(409).json({ Message:"Duplicate currency found."});

    try {
        const newCurrency = await prisma.currency.create({
            data : {
                currency
            }
        })
        console.log(newCurrency)
        res.status(201).json({ 'success': `New currency created!`, newCurrency });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}
const getCurrency = async (req, res) => {
    try {
        const allCurrency = await prisma.currency.findMany()
        res.status(200).json(allCurrency)
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}
module.exports = {
    createCurrency,
    getCurrency
}