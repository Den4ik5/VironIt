const Service = require('../service/StageService');


module.exports = class StageController {
    static async getStage(req, res) {
        res.send(await Service.getStage(req.params.id));
    }

    static async getAllStages(req, res) {
        res.send(await Service.getAllStages());
    }

    static async getAllStageRaces(req, res){
        res.send(await Service.getAllStagesRaces(req.params.id))
    }

    static async getAllUsers(req, res){
        return res.send(await Service.getAllStagesUsers(req.params.id));
    }
    static async addStage(req, res) {
        const stage = req.body;
        res.send(await Service.storeStage(stage));
    }

    static async deleteStage(req, res) {
        res.send(await Service.deleteStage(req.params.id));
    }

    static async updateStage(req, res) {
        res.send(await Service.editStage())
    }

};