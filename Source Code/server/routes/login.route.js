//==============================================
// Controllers
//==============================================
const {login} = require("../controllers/auth.controller");
//==============================================
// Params validations
//==============================================
const {loginParams} = require("../params/auth.params");
//==============================================
// Routes handler
//==============================================
const {Router} = require('express');
const router = Router();

/**
 * Grant access to user
 * @param body
 * @example {
 *     email: 'user@mail.com',
 *     password: '1234'
 * }
 */
router.post('/', [...loginParams], login);

module.exports = router;
