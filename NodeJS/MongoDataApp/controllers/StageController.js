const Service = require('../service/StageService');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');


module.exports = class StageController {
    static async getStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.getStage(req.params.id));
        }
    }

    static async getAllStages(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.getAllStages());
        }
    }

    static async getAllStageRaces(req, res) {
        res.send(await Service.getAllStagesRaces(req.params.id))
    }


    static async addStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            const stage = req.body;
            res.send(await Service.storeStage(stage));
        }
    }

    static async deleteStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.deleteStage(req.params.id));
        }
    }

    static async updateStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send("You don't have rights, sorry:)");
        } else {
            res.statusCode = 200;
            res.send(await Service.editStage(req.body.id, req.body.title, req.body.description, req.body.place))
        }
    }
};