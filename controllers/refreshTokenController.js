const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt)
    const refreshToken = cookies.jwt;
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403)
            const accessToken = jwt.sign(
                {   //payload
                    "userEmail": decoded.userEmail
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '1d'
                }
            );
            res.json({ accessToken })
        }
    )

}

module.exports = {
    handleRefreshToken,
}