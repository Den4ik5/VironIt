const Service = require('../service/UserService');

module.exports = class UserController {
    static async getUser(req, res) {
        res.send(await Service.getUser(req.params.id));
    }

    static async getAllUsers(req, res) {
        res.send(await Service.getAllUsers())
    }

    static async addUser(req, res) {
        const user = req.body;
        res.send(await Service.storeUser(user))
    }

    static async deleteUser(req, res) {
        res.send(await Service.deleteUser(req.params.id))
    }

    static async updateUser(req, res) {
        res.send(await Service.editUser(req.body.id, req.body.username))
    }

};