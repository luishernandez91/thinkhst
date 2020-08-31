//==============================================
// Setting environment
//==============================================
process.env.NODE_ENV = 'dev';
const config = require('./config');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const db = require('./models/dbconnection');

//==============================================
// Verify database connection
//==============================================
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
//==============================================
// Init sequelize with session store
//==============================================
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//==============================================
// Create app
//==============================================
const app = express();
//==============================================
// Enable cors
//==============================================
app.use(cors({
    origin: [
        "http://localhost:4200",
    ],
    credentials: true
}));
//==============================================
// Init express session package
//==============================================
app.use(session({
    secret: 'be or not to be',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: db
    }),
    proxy: true,
    name: 'id'
}));
//==============================================
// parse application/x-www-form-urlencoded
//==============================================
app.use(express.json());
//==============================================
// Routes implementation
//==============================================
app.use('/login', require('./routes/login.route'));
app.use('/user', require('./routes/user.route'));

//==============================================
// Setting up server
//==============================================
app.listen(config.app.port, () => {
    console.log('server Online on port ' + config.app.port);
});
