const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
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
 * Grant access to user
 * @param body
 * @example {
 *     email: 'user@mail.com',
 *     password: '1234'
 * }
 */
app.post('/', async (req, res) => {

    const {email, password} = req.body;

    // Validates if credentials are provided
    if (!email || !password) {
        return res.status(403).json({
            message: 'Email and password are required'
        });
    }

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
});

/**
 * Updates user info by id
 */
app.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;

    if (data.password) {
        data.password = bcrypt.hashSync(data.password, 10)
    }

    User.update(data, {where: {id: id}})
        .then(() => {
            res.status(200).json({
                ok: true,
                message: 'Updated'
            });
        }).catch((err) => {
        res.status(400).json({
            ok: false,
            err: err.errors
        });
    });
});
/**
 * Drop user by id
 */
app.delete('/:id', (req, res) => {

    let id = req.params.id;
    User.destroy({
        where: {
            id: id
        }
    })
        .then(response => {
            res.status(200).json({
                ok: true,
                response
            });
        })
        .catch(error => {
            res.status(500).json({
                ok: false,
                error: error.errors
            });
        });

});
module.exports = app;
