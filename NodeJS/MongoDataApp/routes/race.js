const express = require('express');
const RaceController = require('../controllers/RaceController');
const router = express.Router();
const auth = require('../config/auth');


/*
* @oas [get] /{id}
* description: "Returns race by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "race Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/
router.get('/:id', auth.required,  RaceController.getRace);
/*
* @oas [get] /
* description: "Returns all stages"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/
router.get('/', auth.required, RaceController.getAllRaces);

/*
* @oas [get] /season/{season}
* description: "Left join races to stages and stages to leagues matched by a season"
* parameters:
*   -  name: "season"
*      in: path
*      description: "season"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/

router.get('/season/:season', auth.required, RaceController.getAllRacesBySeason);

/*
* @oas [post] /
* description: "add stage"
* parameters:
*   -  name: "time"
*      in: body
*      description: "race time"
*      type: "String"
*   -  name: "description"
*      in: body
*      description: "something about race"
*      type: "String"
*   -  name: "title"
*      in: body
*      description: "title"
*      type: "String"
*   -  name: "user"
*      in: body
*      description: "UserID race belongs to"
*      type: "String"
*   -  name: "stage"
*      in: body
*      description: "StageID race belongs to"
*      type: "String"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
*   403:
*     description: "Not enough rights"
 */


router.post('/', auth.required, RaceController.addRace);

/*
* @oas [put] /
* description: "edit race"
* parameters:
*   -  name: "id"
*      in: body
*      description: "race id"
*      type: "String"
*   -  name: "time"
*      in: body
*      description: "time"
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


router.put('/', auth.required, RaceController.updateRace);
/*
* @oas [delete] /{id}
* description: "Deletes race by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "races Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*/

router.delete('/:id', auth.required, RaceController.deleteRace);

module.exports = router;