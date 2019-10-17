const Service = require('../service/UserService');
const passport = require('passport');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');
const CONSTANT = require('../const');
module.exports = class UserController {
    static async getUser(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
            } else {
                const user = await Service.getUser(req.params.id);
                if (user) {
                    res.statusCode = 200;
                    res.send(user);
                } else {
                    res.statusCode = 404;
                    res.send(CONSTANT.NOT_FOUNDED_MESSAGE)
                }
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
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            const users = await Service.getAllUsers();
            if (users) {
                res.statusCode = 200;
                res.send(users)
            } else {
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async getRaces(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
            } else {
                const races = await Service.getAllUserRaces(req.params.id);
                if (races) {
                    res.statusCode = 200;
                    res.send(races);
                } else {
                    res.statusCode = 404;
                    res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
                }
            }
        } else {
            const races = await Service.getAllUserRaces(req.params.id);
            if (races) {
                res.statusCode = 200;
                res.send(races);
            } else {
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async getLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
            } else {
                const leagues = await Service.getUsersLeague(req.params.id);
                if (leagues) {
                    res.statusCode = 200;
                    res.send(leagues);
                } else {
                    res.statusCode = 404;
                    res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
                }
            }
        } else {
            const leagues = await Service.getUsersLeague(req.params.id);
            if (leagues) {
                res.statusCode = 200;
                res.send(leagues);
            } else {
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async addUser(req, res) {
        const user = req.body;
        try {
            res.statusCode = 200;
            res.send(await Service.storeUser(user));
        } catch (e) {
            res.statusCode = 500;
            res.send(e);
        }

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
                    res.statusCode = 200;
                    return res.send(JSON.stringify({user: user}));
                } else {
                    console.log('info');
                    res.statusCode = 300;
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
                res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
            } else {
                res.statusCode = 200;
                res.send(await Service.deleteUser(req.params.id))
            }
        } else {
            res.statusCode = 200;
            res.send(await Service.deleteUser(req.params.id));
        }
    }

    static async updateUser(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, id)) {
                res.statusCode = 403;
                res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
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