const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {

    const { userEmail, password } = req.body;
    console.log(userEmail, password);
    if (!userEmail || !password) 
        return res.status(400).json({ 'message': 'Email and password are required.' });
    try {
        const user = await prisma.user.findUnique({
            where: {
                userEmail,
            },
            include: {
                roles: true,
            },
        })
        if (!user) return res.sendStatus(401)
        console.log(user)
        const userRoles = user.roles.map(roleId => (roleId.id));

        const authenticatedUser = await bcrypt.compare(password, user.password);
        if (authenticatedUser) {
            const accessToken = jwt.sign(
                {   //payload
                    "userEmail": user.userEmail,
                    "roles": userRoles
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '1d'
                }
            )
            const refreshToken = jwt.sign(
                {   //payload
                    "userEmail": user.userEmail
                },
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn: '1d'
                }
            )


            // insert the refreshToken in user credential
            const updatedUser = await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    refreshToken: {
                        push: refreshToken
                    }
                },
            });

            console.log({updatedUser})
            res.cookie('jwt', refreshToken, { 
                httpOnly: true, 
                //sameSite:'None',//sameSite issue creates in front end site because the front and back are not in same domain
                //secure: true, //secure is for https
                maxAge: 24*60*60*1000}) 
            
            console.log({accessToken})
            res.status(200).json({ accessToken, roles: userRoles })
        } else {
            res.status(401).json({'Error': `User ${user.userName} is unauthenticated.`})
        }
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    handleLogin,
}