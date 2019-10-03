const Service = require('../service/LeagueService');

module.exports = class LeagueController {

    static async getLeague(req, res) {
        res.send(await Service.getLeague(req.params.id));
    }

    static async getAllLeagues(req, res) {
        res.send(await Service.getAllLeagues());
    }

    static async addLeague(req, res) {
        const league = req.body;
        res.send(await Service.storeLeague(league));
    }

    static async deleteLeague(req, res) {
        res.send(await Service.deleteLeague(req.params.id));
    }

    static async updateLeague(req, res) {
        res.send(await Service.editLeague());
    }

    static async addUserToLeague(req, res) {
        const DTO = req.body;
        res.send(await Service.addUserToLeague(DTO));
    }

};