const Sequelize = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, {
    host: config.db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true
    },
    logging: false
});

module.exports = sequelize;
