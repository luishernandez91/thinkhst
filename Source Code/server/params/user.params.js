const {validateParams} = require("../middlewares/validate-params");
const {check} = require("express-validator");
/**
 * Required params for create/update operations
 */
const userParams = [
    check('email', 'Email is required').exists().not().isEmpty(),
    check('name', 'Name is required').exists().not().isEmpty(),
    validateParams
];

module.exports = {userParams};
