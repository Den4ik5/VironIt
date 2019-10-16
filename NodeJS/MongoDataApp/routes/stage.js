const express = require('express');
const StageController = require('../controllers/StageController');
const router = express.Router();
const auth = require('../config/auth');
/*
 *@oas[get] /{id}
 * description: "Returns stage by Id"
 * parameters:
 * -(path) id {String} Stages Id
 */
router.get('/:id', auth.required, StageController.getStage);
/*
 * @oas[get] /
 * description: "Returns all stages"
 */
router.get('/', auth.required, StageController.getAllStages);
/*
 * @oas[post] /
 * description: "Adds stage to the database"
 * parameters:
 * -(body) title {String} Short information about stage
 * -(body) description {String} Everything you need to know about stage
 * -(body) place {String} Place vere stage  is
 * -(body) league {String} League Id that stage belongs to
 */
router.post('/', auth.required, StageController.addStage);
/*
 * @oas[put] /
 * description: "Changes stage"
 * parameters:
 * -(body) id {String} Stage id
 * -(body) title {String} New title
 * -(body) description {String} New description
 * -(body) place {String} New place
 */
router.put('/', auth.required, StageController.updateStage);

/*
 * @oas[delete] /
 * description: "Deletes stage"
 * parameters:
 * -(path) id {String} Id user to be deleted
 */
router.delete('/:id', auth.required, StageController.deleteStage);

module.exports = router;