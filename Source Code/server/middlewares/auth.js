const jwt = require('jsonwebtoken');
const config = require('../config');

//==============================================
// Verify token
//==============================================
exports.verifyToken = (req, res, next) => {
    if (!req.get('token') || !req.session.user) {
        return res.status(403).json({
            ok: false,
            message: 'Forbidden access'
        });
    }

    let token = req.get('token');

    jwt.verify(token, config.jwt.seed, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                message: 'Incorrect token',
                errors: err
            });
        }

        req.user = decoded.payload;
        next();
    })
};
