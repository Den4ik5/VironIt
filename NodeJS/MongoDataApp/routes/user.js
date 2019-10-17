const express = require('express');
const UsersController = require('../controllers/UserController');
const router = express.Router();
const auth = require('../config/auth');


/*
* @oas [get] /{id}
* description: "Returns user by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "User Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/

router.get('/:id', auth.required, UsersController.getUser);

/*
* @oas [get] /
* description: "Returns all users"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/

router.get('/', auth.required, UsersController.getAllUsers);

/*
* @oas [get] /race/{id}
* description: "Returns races by userId"
* parameters:
*   -  name: "id"
*      in: path
*      description: "User Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/

router.get('/race/:id', auth.required, UsersController.getRaces);

/*
* @oas [get] /league/{id}
* description: "Returns all leagues for user by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "User Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/

router.get('/league/:id', auth.required,  UsersController.getLeague);

/*
* @oas [post] /
* description: "add user"
* parameters:
*   -  name: "name"
*      in: body
*      description: "users name and lastName"
*      type: "Object"
*   -  name: "username"
*      in: body
*      description: "username"
*      type: "String"
*   -  name: "password"
*      in: body
*      description: "password"
*      type: "String"
*   -  name: "isAdmin"
*      in: body
*      description: "sets admin rights"
*      type: "Boolean"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
 */

router.post('/', auth.optional, UsersController.addUser);

/*
* @oas [post] /login
* description: "authentication"
* parameters:
*   -  name: "username"
*      in: body
*      description: "Username"
*      type: "String"
*   -  name: "password"
*      in: body
*      description: "password"
*      type: "String"
* responses:
*   200:
*     description: OK
*   300:
*     description: "info"
*/

router.post('/login', auth.optional, UsersController.loginUser);

/*
* @oas [put] /
* description: "Changes users username"
* parameters:
*   -  name: "id"
*      in: body
*      description: "id"
*      type: "String"
*   -  name: "username"
*      in: body
*      description: "username"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*/

router.put('/', auth.required, UsersController.updateUser);
/*
* @oas [delete] /{id}
* description: "Deletes user by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "User Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*/


router.delete('/:id', auth.required, UsersController.deleteUser);

module.exports = router;