const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleLogout = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) 
        return res.sendStatus(204); //no content

    const refreshToken = cookies.jwt;
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decoded) => {
            if (err) return res.sendStatus(403)
            

            const user = await prisma.user.findUnique({
                where: {
                    userEmail: decoded.userEmail,
                },
            })
            if (!user) {
                console.log("USER NOT FOUND")
                // res.clearCookie('jwt', { 
                //     httpOnly: true, 
                //     // sameSite: 'None', 
                //     // secure: true 
                // })
                return res.sendStatus(204)
            }


            // console.log(user)
            const newRefreshTokens = user.refreshToken.filter(token => token !== refreshToken)

            // console.log({"remainTokens": newRefreshTokens})

            const result = await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    refreshToken: {
                        set: newRefreshTokens
                    }
                },
            });
            console.log(result)
            res.clearCookie('jwt', { 
                httpOnly: true, 
                // sameSite: 'None', //frr frontend issue... supposed to be same site if set not none
                // secure: true // for https
            })
            res.sendStatus(204)
        }
    )

}

module.exports = {
    handleLogout,
}