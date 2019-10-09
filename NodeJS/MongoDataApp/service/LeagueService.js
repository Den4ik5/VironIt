const League = require('../model/league/LeaqueSchema');
const Stage = require('../model/stage/StageSchema');
const User = require('../model/user/UserSchema');
const Race = require('../model/race/RaceSchema');
const mongoose = require('mongoose');


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

    //works
    static async deleteLeague(leagueId) {
        const stages = [];
        let temp = await Stage.find({league: leagueId});
        temp.forEach(el => {
            stages.push(el._id);
        });
        try {
            await Race.find({stage: stages}).remove();
            await Stage.deleteMany({league: leagueId});
            await League.findOneAndDelete({_id: leagueId});
            return true;
        }catch (e) {
            return e;
        }
    /*
        try {
            return await League.deleteOne({_id: leagueId}).then(() => {
                console.log('hey');
                return Stage.find({league: leagueId}).forEach(el => {
                    console.log(el);
                    stages.push(el._id);
                });
            }).then(()=>{
                return stages.forEach(el=> Race.deleteMany({stage: el}));
            }).then(() => {
                return Stage.deleteMany({league: leagueId});
            });
        } catch (e) {
            return e;
        }
*/

        /*try {
            return await League.createCollection().then(() => mongoose.connection.startSession()).then(_session => {
                session = _session;
                session.startTransaction();
                return League.deleteOne({_id: leagueId})
            }).then(()=>{
                const stages=[];
                Stage.find({league : leagueId}).forEach(el=>{stages.push(el._id)});
                return Race.deleteMany({stage:{
                        $in: stages
                    }})
            }).then(()=>{
                return Stage.deleteMany({league: leagueId});

            }).then(()=>{
                return session.commitTransaction();
            });
        } catch (e) {
            console.log(e);
            return session.abortTransaction();
        }*/
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

    //works
    static async editLeague(id, title, description) {
        try {
            return await League.findOneAndUpdate({_id: id}, {
                $set: {
                    title: title,
                    description: description
                }
            }, {new: true})

        } catch (e) {
            return e;
        }
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