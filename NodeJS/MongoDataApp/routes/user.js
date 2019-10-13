const express = require('express');
const UsersController = require('../controllers/UserController');
const router = express.Router();
/*
 * @oas[get] /{id}
 * description: "Returns user by Id"
 * parameters:
 *  -(path) id* {String} User Id
 */

router.get('/:id', UsersController.getUser);
/*
 * @oas[get] /
 * description: "Returns all users"
 */
router.get('/', UsersController.getAllUsers);
/*
 * @oas[get] /race/{id}
 * description: "Returns races for user by Id"
 * parameters:
 *  -(path) id {String} User Id
 */
router.get('/race/:id', UsersController.getRaces);
/*
 * @oas[get] /league/{id}
 * description: "Returns all leagues for user by Id"
 * parameters:
 *  -(path) id {String} User Id
 */
router.get('/league/:id', UsersController.getLeague);
/*
 * @aos[post] /
 * description: "Adds user in to a database"
 * parameters:
 *  -(body) name {object} it should have only fields firstName and lastName string types
 *  -(body) username {String}
 */
router.post('/', UsersController.addUser);
/*
 * @aos[put] /
 * description: "Changes users username"
 * parameters:
 * -(body) username {String}
 */
router.put('/', UsersController.updateUser);
/*
 * @aos[delete] /
 * description: "Deletes user by Id"
 * parameters:
 * -(path) id {String} Users Id
 */
router.delete('/:id', UsersController.deleteUser);

module.exports = router;