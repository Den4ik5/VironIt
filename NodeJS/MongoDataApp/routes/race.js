const express = require('express');
const RaceController = require('../controllers/RaceController');
const router = express.Router();
const auth = require('../config/auth');


/*
 * @oas[get] /{id}
 * description: "Returns race by Id"
 * parameters:
 * -(path) id {String} Race id
 */
router.get('/:id', auth.required,  RaceController.getRace);
/*
 * @oas[get] /
 * description: "Returns all races"
 */
router.get('/', auth.required, RaceController.getAllRaces);
/*
 * @oas[get] /season/{season}
 * description: Left join races to stages and stages to leagues matched by a season
 * parameters:
 * -(path) season {String}
 */
router.get('/season/:season', auth.required, RaceController.getAllRacesBySeason);
/*
 * @oas[post] /
 * description: "Adds new Race to the database"
 * parameters:
 * -(body) time {String}
 * -(body) description {String}
 * -(body) title {String}
 * -(body) user {String} user that race belongs to
 * -(body) stage {String} stage that race belongs to
 */
router.post('/', auth.required, RaceController.addRace);
/*
 * @oas[put] /
 * description: "changes race by id"
 * parameters:
 * -(body) id {String} Race id
 * -(body) time {String} New time
 * -(body) description {String} New description
 * -(body) title {String} New title
 */
router.put('/', auth.required, RaceController.updateRace);
/*
 * @oas[delete] /{id}
 * description: "deletes race by id"
 * parameters:
 * -(path) id {String} Race id
 */
router.delete('/:id', auth.required, RaceController.deleteRace);

module.exports = router;