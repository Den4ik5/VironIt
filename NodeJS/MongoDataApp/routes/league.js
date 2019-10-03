const express = require('express');
const LeagueController = require('../controllers/LeagueController');
const router = express.Router();

router.get('/id', LeagueController.getLeague);
router.get('/', LeagueController.getAllLeagues);
router.post('/', LeagueController.addLeague);
router.put('/', LeagueController.updateLeague);
router.delete('/id', LeagueController.deleteLeague);

module.exports = router;