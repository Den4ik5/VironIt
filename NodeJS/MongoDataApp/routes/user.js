const express = require('express');
const UsersController = require('../controllers/UserController');
const router = express.Router();
const auth = require('../config/auth');
/*
 * @oas[get] /{id}
 * description: "Returns user by Id"
 * parameters:
 *  -(path) id* {String} User Id
 */

router.get('/:id', auth.required, UsersController.getUser);

/*
 * @oas[get] /
 * description: "Returns all users"
 */

router.get('/', auth.required, UsersController.getAllUsers);

/*
 * @oas[get] /race/{id}
 * description: "Returns races for user by Id"
 * parameters:
 *  -(path) id {String} User Id
 */

router.get('/race/:id', auth.required, UsersController.getRaces);

/*
 * @oas[get] /league/{id}
 * description: "Returns all leagues for user by Id"
 * parameters:
 *  -(path) id {String} User Id
 */

router.get('/league/:id', auth.required,  UsersController.getLeague);

/*
 * @aos[post] /
 * description: "Adds user in to a database"
 * parameters:
 *  -(body) name {Object} it should have only fields firstName and lastName string types
 *  -(body) username {String}
 *  -(body) password {String}
 */

router.post('/', auth.optional, UsersController.addUser);

/*
 * @oas[post] /login
 * description: "authentication"
 * parameters:
 * -(body) username {String}
 * -(body) password {String}
 */

router.post('/login', auth.optional, UsersController.loginUser);

/*
 * @aos[put] /
 * description: "Changes users username"
 * parameters:
 * -(body) id {String}
 * -(body) username {String}
 */

router.put('/', auth.required, UsersController.updateUser);

/*
 * @aos[delete] /
 * description: "Deletes user by Id"
 * parameters:
 * -(path) id {String} Users Id
 */

router.delete('/:id', auth.optional, UsersController.deleteUser);

module.exports = router;