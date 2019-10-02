const Race = require('../model/race/RaceSchema');

module.exports = class RaceService {

    static async getRace(id) {
        try {
            return (await Race.findById({_id: id}));
        } catch (e) {
            return e;
        }
    }

    static async getAllRaces() {
        try {
            return (await Race.find({}));
        } catch (e) {
            return e;
        }
    }

    static async deleteRace() {
        try {
            return (await Race.deleteOne({_id: id}));
        } catch (e) {
            return e;
        }
    }

    static async storeRace(time, description, title) {
        const race = new Race({
            time: time,
            description: description,
            title: title
        });
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