const express = require('express');
const LeagueController = require('../controllers/LeagueController');
const router = express.Router();
/*
 * @oas[get] /{id}
 * description: "returns league by id"
 * parameters:
 * -(path) id {String} leagues id
 */
router.get('/:id', LeagueController.getLeague);
/*
 * @oas[get] /
 * description: "returns all leagues"
 */
router.get('/', LeagueController.getAllLeagues);
/*
 * @oas[post] /
 * description: "adds league to database"
 * parameters:
 * -(body) season {String}
 * -(body) description {String}
 * -(body) title {String}
 */
router.post('/', LeagueController.addLeague);
/*
 * @oas[put] /
 * description: "changes league"
 * parameters:
 * -(body) id {String}
 * -(body) title {String}
 * -(body) description {String}
 */
router.put('/', LeagueController.updateLeague);
/*
 * @oas[put] /user
 * description: "adds user to a league"
 * parameters:
 * -(body) leagueId {String} league id
 * -(body) userId {String} user Id
 */
router.put('/user', LeagueController.addUserToLeague);
/*
 * @oas[delete] /{id}
 * description: "Deletes league by Id"
 * parameters: 
 * -(path) id {String} league Id
 */
router.delete('/:id', LeagueController.deleteLeague);

module.exports = router;