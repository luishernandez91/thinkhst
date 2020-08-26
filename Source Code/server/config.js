// config.js
const env = process.env.NODE_ENV;

const dev = {
    app: {
        port: 3000
    },
    db: {
        host: '192.168.64.2',
        user: 'soem',
        pass: '',
        name: 'soem',
    },
    jwt: {
        seed: 'soem-login'
    }
};
const config = {
    dev,
};

module.exports = config[env];
