const League = require('../model/league/LeaqueSchema');

module.exports = class LeagueService {

    static async getLeague(id) {
        try {
            return await League.FindByID({_id: id});
        } catch (e) {
            return e;
        }
    }

    static async getAllLeagues() {
        try {
            return await League.find({});
        } catch (e) {
            return e;
        }
    }

    static async deleteLeague(id) {
        try {
            return await League.deleteOne({_id: id});
        } catch (e) {
            return e;
        }
    }

    static async storeLeague(season, description, title) {
        const league = new League({
            season: season,
            description: description,
            title: title
        });
        try {
            return await league.save();
        } catch (e) {
            return e;
        }
    }

    static async editLeague() {
        //TODO: add logic
    }

};