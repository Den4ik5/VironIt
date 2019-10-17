const Service = require('../service/StageService');
const getTokenFromHeaders = require('../service/getTokenFromHeaders');
const getCredentialsFromJWT = require('../service/getCredentialsFromJWT');
const grantRights = require('../service/grantRights');
const CONSTANT = require('../const');


module.exports = class StageController {
    static async getStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            const stage = await Service.getStage(req.params.id);
            if(stage){
                res.statusCode = 200;
                res.send(stage);
            }else {
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async getAllStages(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            const stages = await Service.getAllStages();
            if(stages){
                res.statusCode = 200;
                res.send(stages);
            }else{
                res.statusCode = 404;
                res.send(CONSTANT.NOT_FOUNDED_MESSAGE);
            }
        }
    }

    static async addStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            try {
                res.statusCode = 200;
                const stage = req.body;
                res.send(await Service.storeStage(stage));
            }catch (e) {
                res.statusCode = 500;
                res.send(e);
            }
        }
    }

    static async deleteStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            res.statusCode = 200;
            res.send(await Service.deleteStage(req.params.id));
        }
    }

    static async updateStage(req, res) {
        const tokenCredentials = getCredentialsFromJWT(getTokenFromHeaders(req));
        if (!grantRights.grantAdminRights(tokenCredentials)) {
            res.statusCode = 403;
            res.send(CONSTANT.NOT_ENOUGH_RIGHTS_MESSAGE);
        } else {
            try {
                res.statusCode = 200;
                res.send(await Service.editStage(req.body.id, req.body.title, req.body.description, req.body.place))
            }catch (e) {
                res.statusCode = 500;
                res.send();
            }

        }
    }
};