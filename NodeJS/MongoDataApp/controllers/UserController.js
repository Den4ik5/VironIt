const Service = require('../service/UserService');

module.exports = class UserController {
    static async getUser(req, res) {
        res.send(await Service.getUser(req.params.id));
    }

    static async getAllUsers(req, res) {
        res.send(await Service.getAllUsers())
    }

    static async getRaces(req, res) {
        res.send(await Service.getAllUserRaces(req.params.id))
    }

    static async getLeague(req, res) {
        res.send(await Service.getUsersLeague(req.params.id))
    }

    static async addUser(req, res) {
        const user = req.body;
        res.json(await Service.storeUser(user));
    }

    static async loginUser(req, res, next) {
        let user = req.body;
        //   user.username = req.body.username;
        //   user.password = req.body.password;
        console.log(user);
        console.log('i am in login User function');
        const  temp = await ((await Service.login(user))(req, res, next));
        console.log('temp = ');
        console.log(temp);
        res.send(temp);
    }

    static async deleteUser(req, res) {
        res.send(await Service.deleteUser(req.params.id))
    }

    static async updateUser(req, res) {
        res.send(await Service.editUser(req.body.id, req.body.username, req.body.password))
    }


};