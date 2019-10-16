const Service = require('../service/RaceService');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');

module.exports = class RaceController {
    static async getRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        const race = (await Service.getRace(req.params.id));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, race.user)) {
                res.statusCode = 403;
                res.send("You don't have rights, sorry:)");
            } else {
                res.statusCode = 200;
                res.send(race);
            }
        } else {
            res.statusCode = 200;
            res.send(race);
        }
    }

    static async getAllRaces(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.getAllRaces());
        }
    }

    static async getAllRacesBySeason(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.getAllRacesBySeason(req.params.season));
        }
    }

    static async addRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if(!grantRights.grantUserRights(tokenCredentials, req.body.user)){
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        }else {
            const race = req.body;
            res.statusCode = 200;
            res.send(await Service.storeRace(race));
        }
    }

    static async deleteRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if(!grantRights.grantAdminRights(tokenCredentials)){
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        }else {
            res.statusCode = 200;
            res.send(await Service.deleteRace(req.params.id));
        }
    }

    static async updateRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if(!grantRights.grantAdminRights(tokenCredentials)){
            res.statusCode=403;
            res.send("You don't have rights, sorry:)");
        }else {
            res.statusCode = 200;
            res.send(await Service.editRace(req.body.id, req.body.time, req.body.description, req.body.title));
        }
    }
};