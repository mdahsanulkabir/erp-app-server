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
        async (err, decoded) => {
            if (err) return res.sendStatus(403);
            const user = await prisma.user.findUnique({
                where: {
                    userEmail: decoded.userEmail,
                },
                include: {
                    roles: true,
                },
            })
            const accessToken = jwt.sign(
                {   //payload
                    "userEmail": decoded.userEmail,
                    "roles": user.roles.map(roleId => (roleId.id)),
                    "userName": user.userName,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '10h'
                }
            );
            res.json({ 
                accessToken,
                roles: user.roles.map(roleId => (roleId.id)),
                userName: user.userName,
                userEmail: user.userEmail
            })
        }
    )

}

module.exports = {
    handleRefreshToken,
}