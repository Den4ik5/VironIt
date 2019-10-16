const Service = require('../service/UserService');
const passport = require('passport');

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
        try {
            return passport.authenticate('local', {session: false}, async (err, passportUser, info) => {
                if (err) {
                    console.log('err');
                    return next(err);
                }
                if (passportUser) {
                    const user = await passportUser.toAuthJSON();
                    console.log(JSON.stringify(user));
                    res.setHeader('authorization', user.token);
                    return res.send(JSON.stringify({user: user}));
                } else {
                    console.log('info');
                    return res.send(info);
                }
            })(req, res, next);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }

    static async deleteUser(req, res) {
        res.send(await Service.deleteUser(req.params.id))
    }

    static async updateUser(req, res) {
        res.send(await Service.editUser(req.body.id, req.body.username, req.body.password))
    }


};