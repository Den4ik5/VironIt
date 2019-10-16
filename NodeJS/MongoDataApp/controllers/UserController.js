const Service = require('../service/UserService');
const passport = require('passport');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');
module.exports = class UserController {
    static async getUser(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send("You don't have rights, sorry:)");
            } else {
                res.statusCode = 200;
                res.send(await Service.getUser(req.params.id));
            }
        } else {
            res.statusCode = 200;
            res.send(await Service.getUser(req.params.id));
        }
    }

    static async getAllUsers(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.getAllUsers())
        }
    }

    static async getRaces(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send("You don't have rights, sorry:)");
            } else {
                res.statusCode = 200;
                res.send(await Service.getAllUserRaces(req.params.id))
            }
        } else {
            res.statusCode = 200;
            res.send(await Service.getAllUserRaces(req.params.id))
        }
    }

    static async getLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send("You don't have rights, sorry:)");
            } else {
                res.statusCode = 200;
                res.send(await Service.getUsersLeague(req.params.id))            }
        } else {
            res.statusCode = 200;
            res.send(await Service.getUsersLeague(req.params.id))        }
    }

    static async addUser(req, res) {
        const user = req.body;
        res.send(await Service.storeUser(user));
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
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send("You don't have rights, sorry:)");
            } else {
                res.statusCode = 200;
                res.send(await Service.deleteUser(req.params.id))
            }
        } else {
            res.statusCode = 200;
            res.send(await Service.deleteUser(req.params.id))
        }

    }

    static async updateUser(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send("You don't have rights, sorry:)");
            } else {
                res.statusCode = 200;
                res.send(await Service.editUser(req.body.id, req.body.username, req.body.password));
            }
        } else {
            res.statusCode = 200;
            res.send(await Service.editUser(req.body.id, req.body.username, req.body.password));
        }
    }


};