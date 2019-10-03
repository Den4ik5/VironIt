const League = require('../model/league/LeaqueSchema');
const Stage = require('../model/stage/StageSchema');


module.exports = class LeagueService {

    static async getLeague(id) {
        try {
            return await League.findById({_id: id});
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
            return await (() => {
                League.deleteOne({_id: id});
                Stage.deleteMany({league: id})
            });
        } catch (e) {
            return e;
        }
    }

    static async storeLeague(leagueDto) {
        const league = new League(leagueDto);
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