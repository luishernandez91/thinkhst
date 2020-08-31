const {validateParams} = require("../middlewares/validate-params");
const {check} = require("express-validator");
/**
 * Required params to login
 */
const loginParams = [
    check('email', 'Email is required').exists().not().isEmpty(),
    check('password', 'Password is required').exists().not().isEmpty(),
    validateParams
];

module.exports = {loginParams};
