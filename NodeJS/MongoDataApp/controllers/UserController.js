const Service = require('../service/UserService');

module.exports = class UserController {
    static getUser(req, res) {
        console.log(req);
        const response = Service.getUser(req.query.id);
        console.log(response);
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