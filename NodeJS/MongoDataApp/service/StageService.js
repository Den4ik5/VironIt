const Stage = require('../model/stage/StageSchema');
const Race = require('../model/race/RaceSchema');

module.exports = class StageService {
    static async getStage(id) {
        try {
            return (await Stage.findById(id));
        } catch (e) {
            return e;
        }
    }

    static async getAllStages() {
        try {
            return (await Stage.find({}));
        } catch (e) {
            return e;
        }
    }

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

    static async storeStage(title, description, place) {
        const stage = new Stage({
            title: title,
            description: description,
            place: place
        });
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