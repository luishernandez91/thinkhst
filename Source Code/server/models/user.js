/**
 * Database import utilities
 */
const Sequelize = require("sequelize");
const db = require('../models/dbconnection');
/**
 * Database model for user entity
 */
const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Name is required"
            }
        }
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Username is required"
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Invalid email format"
            },
            notEmpty: {
                msg: "Email is required"
            }
        }
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                msg: "Password is required"
            }
        }
    },
});

module.exports = User;
