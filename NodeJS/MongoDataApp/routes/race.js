const express = require('express');
const RaceController = require('../controllers/RaceController');
const router = express.Router();

router.get('/id', RaceController.getRace());
router.get('/', RaceController.getAllRaces());
router.post('/', RaceController.addRace());
router.put('/', RaceController.updateRace());
router.delete('/id', RaceController.deleteRace());

module.exports = router;