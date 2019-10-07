const Stage = require('../model/stage/StageSchema');
const Race = require('../model/race/RaceSchema');
const User = require('../model/user/UserSchema');
const mongoose = require('../model/user/UserSchema');

module.exports = class StageService {
    //works
    static async getStage(id) {
        try {
            return (await Stage.findById(id));
        } catch (e) {
            return e;
        }
    }

    //works
    static async getAllStages() {
        try {
            return (await Stage.find({}));
        } catch (e) {
            return e;
        }
    }

    /*
    static async getAllStagesRaces(stageId) {
        try {
            return (await Race.find({stage: stageId}))
        } catch (e) {
            return e;
        }
    }*/

    /*
    static async getAllStagesUsers(stageId) {
        try {
            const users = [];
            const races = await Race.find({stage: stageId});
            races.forEach((el) => {
                users.push(el.user);
            });
            return users;
        } catch (e) {
            return e;
        }
    }*/

    //needs tests
    static async deleteStage(stageId) {
        let session = null;
        try {
            return await Stage.createCollection().then(() => mongoose.connection.startSession()).then(_session => {
                session = _session;
                session.startTransaction();
                return Race.deleteMany({stage: stageId})
            }).then(()=>{
                return Stage.deleteOne({_id: stageId});
            }).then(()=>{
                return session.commitTransaction();
            });
        } catch (e) {
            console.log(e);
            return session.abortTransaction();
        }
    }

    //works
    static async storeStage(stageDto) {
        /*
            {
                "title": "first stage",
                "description": "it is something about race",
                "place": "Minsk city",
                "league": "5d96162b8b983d0d8496def9"
             }
         */
        const stage = new Stage(stageDto);
        try {
            return (await stage.save());
        } catch (e) {
            return e;
        }
    }

    //needs tests
    static async editStage(id, title, description, place) {
        try {
            return await Stage.findOneAndUpdate({_id: id}, {
                $set: {
                    title: title,
                    description: description,
                    place: place
                }
            }, {new: true})
        } catch (e) {
            return e;
        }
    }

};