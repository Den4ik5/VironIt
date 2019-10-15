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
        let user = req.body;
        //   user.username = req.body.username;
        //   user.password = req.body.password;
        console.log(user);
        console.log('i am in login User function');
        let temp;
        try {
            return passport.authenticate('local', {session: false}, async (err, passportUser, info) => {
                console.log('i hate this world');
                if (err) {
                    console.log('err');
                    return next(err);
                }
                if (passportUser) {
                    const  user =  passportUser;
                    console.log('bbbb');
                    const qqq = await Service.login(user);
                    console.log('user is exists', JSON.stringify( {user: await user.toAuthJSON()}));
                    return res.send(JSON.stringify( {user: await user.toAuthJSON()}));
                } else {
                    console.log('info');
                    return res.send(info);
                }
            })(req, res, next);
            // temp = await ((await Service.login(user))(req, res, next));
        }catch (e) {
            console.log(e);
            next(e);
        }

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