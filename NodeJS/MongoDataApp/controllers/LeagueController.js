const Service = require('../service/LeagueService');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');
const CONSTANT = require('../const');

module.exports = class LeagueController {

    static async getLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        const league = await Service.getLeague(req.params.id);
        if (!grantRights.grantAccessToLeagues(tokenCredentials, league.users)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            if(league) {
                res.statusCode = 200;
                res.send(league);
            }else{
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async getAllLeagues(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            const leagues = await Service.getAllLeagues();
            if(leagues){
                res.statusCode = 200;
                res.send(leagues);
            }else{
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async addLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE)
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
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            res.statusCode = 200;
            res.send(await Service.deleteLeague(req.params.id));
        }
    }

    static async updateLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            res.statusCode = 200;
            res.send(await Service.editLeague(req.body.id, req.body.title, req.body.description));
        }
    }

    static async addUserToLeague(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            res.statusCode = 200;
            const userId = req.body.userId;
            const leagueId = req.body.leagueId;
            res.send(await Service.addUserToLeague(leagueId, userId));
        }
    }
};