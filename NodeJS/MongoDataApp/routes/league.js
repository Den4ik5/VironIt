const express = require('express');
const LeagueController = require('../controllers/LeagueController');
const router = express.Router();
const auth = require('../config/auth');

/*
* @oas [get] /leagues/{id}
* description: "Returns league by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "league Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/
router.get('/:id', auth.required, LeagueController.getLeague);
/*
* @oas [get] /leagues/
* description: "Returns all leagues"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/
router.get('/', auth.required, LeagueController.getAllLeagues);
/*
* @oas [post] /leagues/
* description: "add league"
* parameters:
*   -  name: "season"
*      in: body
*      description: "season"
*      type: "String"
*   -  name: "description"
*      in: body
*      description: "something about race"
*      type: "String"
*   -  name: "title"
*      in: body
*      description: "title"
*      type: "String"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
*   403:
*     description: "Not enough rights"
 */
router.post('/', auth.required, LeagueController.addLeague);
/*
* @oas [put] /leagues/
* description: "edit race"
* parameters:
*   -  name: "id"
*      in: body
*      description: "league id"
*      type: "String"
*   -  name: "description"
*      in: body
*      description: "description"
*      type: "String"
*   -  name: "title"
*      in: body
*      description: "title"
*      type: "String"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
*   403:
*     description: "Not enough rights"
 */
router.put('/', auth.required, LeagueController.updateLeague);
/*
* @oas [put] /leagues/
* description: "edit race"
* parameters:
*   -  name: "leagueId"
*      in: body
*      description: "league id"
*      type: "String"
*   -  name: "userId"
*      in: body
*      description: "user id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
*   403:
*     description: "Not enough rights"
 */
router.put('/user', auth.required, LeagueController.addUserToLeague);
/*
* @oas [delete] /leagues/{id}
* description: "Deletes league by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "league Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*/
router.delete('/:id', auth.required, LeagueController.deleteLeague);

module.exports = router;