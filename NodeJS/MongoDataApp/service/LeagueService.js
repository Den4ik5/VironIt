const League = require('../model/league/LeaqueSchema');
const Stage = require('../model/stage/StageSchema');
const User = require('../model/user/UserSchema');


module.exports = class LeagueService {
    //works
    static async getLeague(id) {
        try {
            return await League.findById({_id: id});
        } catch (e) {
            return e;
        }
    }
    //works
    static async getAllLeagues() {
        try {
            return await League.find({});
        } catch (e) {
            return e;
        }
    }
    //don't works
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
    //works
    static async storeLeague(leagueDto) {
        // {
        //     "season": "Summer",
        //     "description": "Summer league 1",
        //     "title": "first created league"
        // }
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
    //works
    static async addUserToLeague(leagueId, userId) {
        console.log(leagueId);
        console.log(userId);
        try {
            return await League.update({_id: leagueId}, {
                $push: {
                    users: userId.toString()
                }
            });
        } catch (e) {
            return e;
        }
    }
};