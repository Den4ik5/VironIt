const express = require('express');
const UsersController = require('../controllers/UserController');
const router = express.Router();

router.get('/:id', UsersController.getUser);
router.get('/', UsersController.getAllUsers);
router.get('/race/:id', UsersController.getRaces);
router.get('/league/:id', UsersController.getLeague);
router.post('/', UsersController.addUser);
router.put('/', UsersController.updateUser);
router.delete('/:id', UsersController.deleteUser);

module.exports = router;