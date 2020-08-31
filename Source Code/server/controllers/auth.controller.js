const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');
//==============================================
// Database model
//==============================================
const User = require('../models/user');
//==============================================
// Database utils
//==============================================
const Sequelize = require('sequelize');
/**
 * Init session and retrieves token with user info if success
 */
const login = async (req, res) => {
    const {email, password} = req.body;

    // Finds user by email
    const dbUser = await User.findOne({
        where: {
            [Sequelize.Op.or]: [{email}, {username: email}]
        },
        attributes: ['id', 'name', 'email', 'password',],
        raw: true
    });
    // Validates if user exists
    if (!dbUser) {
        return res.status(400).json({
            ok: false,
            message: 'Invalid credentials'
        });
    }

    // Compare credentials
    if (!bcrypt.compareSync(password, dbUser.password)) {
        return res.status(400).json({
            ok: false,
            message: 'Invalid credentialst'
        });
    }

    // Save user info in session variable
    req.session.user = dbUser;
    let payload = {
        name: dbUser.name,
        email: dbUser.email
    };
    // Creates token
    let token = jwt.sign({payload}, config.jwt.seed, {expiresIn: '1d'});
    // Returns user info on success login
    res.status(200).json({
        ok: true,
        user: {...dbUser, password: undefined},
        token,
    });
};

module.exports = {login};
