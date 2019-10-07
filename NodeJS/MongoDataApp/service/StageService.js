const Stage = require('../model/stage/StageSchema');
const Race = require('../model/race/RaceSchema');
const User = require('../model/user/UserSchema');

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

    //refactor
    static async getAllStagesRaces(stageId) {
        try {
            return (await Race.find({stage: stageId}))
        } catch (e) {
            return e;
        }
    }

    //refactor
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
    }

    //TODO: complete deleteStage function
    static async deleteStage(id) {
        try {
            return await (() => {
                Stage.deleteOne({_id: id});
                Race.deleteMany({stage: id});
            });
        } catch (e) {
            return e;
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

    static async editStage() {
        //TODO: add logic
    }

};