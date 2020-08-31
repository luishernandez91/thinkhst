//==============================================
// Controllers
//==============================================
const {userParams} = require("../params/user.params");
const {verifyToken} = require("../middlewares/auth");
const {updateUser, deleteUser, getUsers} = require("../controllers/user.controller");
//==============================================
// Routes handler
//==============================================
const {Router} = require('express');
const router = Router();
/**
 * Retrieves all users in db
 */
router.get('/', getUsers);
/**
 * Updates user info by id
 */
router.put('/:id', [verifyToken, ...userParams], updateUser);
/**
 * Drop user by id
 */
router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
