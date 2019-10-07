const Service = require('../service/RaceService');


module.exports = class RaceController {
    static async getRace(req, res) {
        res.send(await Service.getRace(req.params.id));
    }

    static async getAllRaces(req, res) {
        res.send(await Service.getAllRaces());
    }

    static async getAllRacesBySeason(req, res){
        res.send(await Service.getAllRacesBySeason(req.params.season));
    }

    static async addRace(req, res) {
        const race = req.body;
        res.send(await Service.storeRace(race));
    }

    static async deleteRace(req, res) {
        res.send(await Service.deleteRace(req.params.id));
    }

    static async updateRace(req, res) {
        res.send(await Service.editRace(req.body.id, req.body.time, req.body.description, req.body.title))
    }

};