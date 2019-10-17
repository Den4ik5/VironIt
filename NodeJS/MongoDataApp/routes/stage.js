const express = require('express');
const StageController = require('../controllers/StageController');
const router = express.Router();
const auth = require('../config/auth');
/*
* @oas [get] /{id}
* description: "Returns stage by Id"
* parameters:
*   -  name: "id"
*      in: path
*      description: "Stage Id"
*      type: "String"
* responses:
*   200:
*     description: OK
*   403:
*     description: "Not enough rights"
*   404:
*     description: "Not Founded"
*/
router.get('/:id', auth.required, StageController.getStage);
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
router.get('/', auth.required, StageController.getAllStages);
/*
* @oas [post] /
* description: "add stage"
* parameters:
*   -  name: "title"
*      in: body
*      description: "stages title"
*      type: "String"
*   -  name: "description"
*      in: body
*      description: "something about stage"
*      type: "String"
*   -  name: "place"
*      in: body
*      description: "where should stage starts"
*      type: "String"
*   -  name: "league"
*      in: body
*      description: "leagueID stage belongs to"
*      type: "String"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
*   403:
*     description: "Not enough rights"
 */
router.post('/', auth.required, StageController.addStage);
/*
* @oas [put] /
* description: "edit stage"
* parameters:
*   -  name: "title"
*      in: body
*      description: "stages title"
*      type: "String"
*   -  name: "description"
*      in: body
*      description: "something about stage"
*      type: "String"
*   -  name: "place"
*      in: body
*      description: "where should stage starts"
*      type: "String"
*   -  name: "league"
*      in: body
*      description: "leagueID stage belongs to"
*      type: "String"
* responses:
*   200:
*     description: OK
*   500:
*     description: "Failed"
*   403:
*     description: "Not enough rights"
 */
//TODO:ADD responces to the controller(try/catch block)
router.put('/', auth.required, StageController.updateStage);

/*
 * @oas[delete] /
 * description: "Deletes stage"
 * parameters:
 * -(path) id {String} Id user to be deleted
 */
router.delete('/:id', auth.required, StageController.deleteStage);

module.exports = router;