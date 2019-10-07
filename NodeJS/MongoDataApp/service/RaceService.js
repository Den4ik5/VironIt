const Race = require('../model/race/RaceSchema');

module.exports = class RaceService {
    //works
    static async getRace(id) {
        try {
            return (await Race.findById({_id: id}));
        } catch (e) {
            return e;
        }
    }
    //works
    static async getAllRaces() {
        try {
            return (await Race.find({}));
        } catch (e) {
            return e;
        }
    }
    //works
    static async deleteRace(id) {
        try {
            return (await Race.deleteOne({_id: id}));
        } catch (e) {
            return e;
        }
    }
    //works
    static async storeRace(raceTdo) {
        /*
            {
                "time" : "13:00",
                "description" : "race for specifidedUser",
                "title": "race",
                "user": "5d95faef6110aa307c1b4c84", userId
                "stage": "5d96120e1bad540b5400521a" stageID
            }
         */
        const race = new Race(raceTdo);
        try {
            return (await race.save());
        } catch (e) {
            return e;
        }
    }

    static async editRace() {
        //TODO: add logic
    }

};