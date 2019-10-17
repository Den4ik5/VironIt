const Service = require('../service/RaceService');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');
const CONSTANT = require('../const');

module.exports = class RaceController {
    static async getRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        const race = (await Service.getRace(req.params.id));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            if (!grantRights.grantUserRights(tokenCredentials, race.user)) {
                res.statusCode = 403;
                res.send()
            } else {
                if(race){
                    res.statusCode = 200;
                    res.send(race);
                }else {
                    res.statusCode = 404;
                    res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
                }
            }
        } else {
            if(race) {
                res.statusCode = 200;
                res.send(race);
            }else{
                res.statusCode=404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async getAllRaces(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            const races = await Service.getAllRaces();
            if(races){
                res.statusCode=200;
                res.send(races);
            }else{
                res.statusCode=404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async getAllRacesBySeason(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            const races = await Service.getAllRacesBySeason(req.params.season);
            if(races) {
                res.statusCode = 200;
                res.send(races);
            } else{
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async addRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if(!grantRights.grantUserRights(tokenCredentials, req.body.user)){
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE)
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
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        }else {
            res.statusCode = 200;
            res.send(await Service.deleteRace(req.params.id));
        }
    }

    static async updateRace(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if(!grantRights.grantAdminRights(tokenCredentials)){
            res.statusCode=403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        }else {
            res.statusCode = 200;
            res.send(await Service.editRace(req.body.id, req.body.time, req.body.description, req.body.title));
        }
    }
};