const Service = require('../service/LeagueService');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');

module.exports = class LeagueController {

    static async getLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        const league = await Service.getLeague(req.params.id);
        if (!grantRights.grantAccessToLeagues(tokenCredentials, league.users)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(league);
        }
    }

    static async getAllLeagues(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.getAllLeagues());
        }
    }

    static async addLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            const league = req.body;
            res.send(await Service.storeLeague(league));
        }
    }

    static async deleteLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.deleteLeague(req.params.id));
        }
    }

    static async updateLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.editLeague(req.body.id, req.body.title, req.body.description));
        }
    }

    static async addUserToLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            const userId = req.body.userId;
            const leagueId = req.body.leagueId;
            res.send(await Service.addUserToLeague(leagueId, userId));
        }
    }
};