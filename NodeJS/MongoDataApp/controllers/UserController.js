const Service = require('../service/UserService');

module.exports = class UserController {
    static getUser(req, res) {
        res.send(Service.getUser(req.query.id))
    }

    static getAllUsers(req, res) {
        res.send(Service.getAllUsers())
    }

    static addUser(req, res) {
        res.send(Service.storeUser())
    }

    static deleteUser(req, res) {
        res.send(Service.deleteUser(req.query.id))
    }

    static updateUser(req, res) {
        res.send(Service.editUser(req.query.id, req.query.name))
    }

};