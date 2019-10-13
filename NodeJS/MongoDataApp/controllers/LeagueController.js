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

        res.send(await Service.editLeague(req.body.id, req.body.title, req.body.description));
    }

    static async addUserToLeague(req, res) {
        console.log(req.body);
        const userId = req.body.userId;
        const leagueId = req.body.leagueId;
        res.send(await Service.addUserToLeague(leagueId, userId));
    }

};