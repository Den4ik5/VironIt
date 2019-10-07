const express = require('express');
const StageController = require('../controllers/StageController');
const router = express.Router();

router.get('/:id', StageController.getStage);
router.get('/', StageController.getAllStages);
router.get('/race/:id', StageController.getAllStageRaces);
router.post('/', StageController.addStage);
router.put('/', StageController.updateStage);
router.delete('/:id', StageController.deleteStage);

module.exports = router;