const bcrypt = require('bcryptjs');
//==============================================
// Database model
//==============================================
const User = require('../models/user');

/**
 * Updates user info
 */
const updateUser = async (req, res) => {
    let id = req.params.id;
    let data = req.body;

    const userExists = await validateUserById(id);
    if (!userExists) {
        return res.status(404).json({message: 'User not found'});
    }

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
            err
        });
    });
};
/**
 * Delete user record from database
 */
const deleteUser = async (req, res) => {
    let id = req.params.id;

    const userExists = await validateUserById(id);
    if (!userExists) {
        return res.status(404).json({message: 'User not found'});
    }

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

};
/**
 * Get all users
 */
const getUsers = (req, res) => {
    User.findAll({raw: true})
        .then((users) => {
            res.status(200).json({
                ok: true,
                users
            });
        }).catch((err) => {
        res.status(500).json({
            ok: false,
            err
        });
    });
};
/**
 * validate user exists
 */
const validateUserById = (id) => {
    return new Promise((resolve, reject) => {
        User.findByPk(id, {raw: true})
            .then(resolve)
            .catch(reject)
    })
};
module.exports = {updateUser, deleteUser, getUsers};
