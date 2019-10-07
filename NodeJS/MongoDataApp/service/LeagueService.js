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
    //stoped working
    static async addUserToLeague(leagueId, userId) {
        console.log(leagueId);
        console.log(userId);
        try {
            League.update({_id: leagueId}, {
                $push: {
                    users: userId
                }
            }).then().League.save();
        } catch (e) {
            return e;
        }
    }
    //hueta
    static async test(leagueId, userId) {
        let session  = null;
        return League.createCollection().then(()=> League.startSession).then(_session =>{
            session = _session;
            session.startTransaction();
            
        })
        // League.createCollection()
        //     .then(() => db.startSession())
        //     .then(session => session.withTransaction(() => {
        //         let a = Promise.all(League.findById({_id: id}), Stage.findById({_id: id}));
        //
        //     return League.findByIdAndUpdate({_id:leagueId},{
        //         $set:{
        //             users: users.push(userId)
        //         }
        //     })
        // })).then(session=>session.withTransaction(()=>{
        //     return League.findById({_id: leagueId});
        // })).startSession().then(() => League.delete()).then(() => delete()).catch()
    }

};