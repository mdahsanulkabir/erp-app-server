const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { 
        userArcelikId,
        userSingerId,
        userEmail,
        userName,
        deptId,
        roles,
        password,
        refreshToken,
        comment = 'new user'
    } = req.body;
    if (!userEmail || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    const duplicateUser = await prisma.user.findUnique({
        where: {
            userEmail,
        },
    })
    if (duplicateUser) return res.status(409).json({ 'Message': "Duplicate User found." });

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const newUser = await prisma.user.create({
            data: {
                userArcelikId,
                userSingerId,
                userEmail,
                userName,
                deptId,
                roles: {
                    connect: roles.map(role => ({ id: role }))
                },
                password : hashedPwd,
                comment,
                refreshToken: { set: refreshToken }
            },
            include: {
                roles: true
            }
        });

        console.log(newUser);

        res.status(201).json({ 'success': `New user created!`, newUser });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };