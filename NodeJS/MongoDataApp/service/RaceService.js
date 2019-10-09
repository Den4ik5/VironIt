const Race = require('../model/race/RaceSchema');
const League = require('../model/league/LeaqueSchema');
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
                "user": "5d9b0dcebf497f10f4bba0aa"
                "stage": "5d9b0e438005e40cd85e02d0"
            }
         */
        const race = new Race(raceTdo);
        try {
            return (await race.save());
        } catch (e) {
            return e;
        }
    }

    //works
    static async getAllRacesBySeason(season) {
            let result = await League.aggregate([
                    { $match : { season : season } },
                    {
                        $project: {
                            _id: {
                                $toString: "$_id"
                            },
                            title: "$title",
                            description: "$description"
                        }
                    },
                    {
                        $lookup:
                            {
                                from: 'stages',
                                localField: '_id',
                                foreignField: 'league',
                                as: 'stagesArr'

                            }
                    }
                    ,
                    {
                        $unwind: {
                            path: "$stagesArr",
                            preserveNullAndEmptyArrays: true
                        }
                    },
                    {
                        $project: {
                            'stagesArr._id': {
                                $toString: "$stagesArr._id"
                            },
                            'stagesArr.title': "$stagesArr.title",
                            'stagesArr.description': "$stagesArr.description",
                            'stagesArr.place' : "$stagesArr.place"
                        }
                    },
                    {
                        $lookup: {
                            from: "races",
                            localField: "stagesArr._id",
                            foreignField: "stage",
                            as: "stagesArr.racesArray",
                        }
                    }
                ],
                async function (err, response) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response)
                    }
                }
            );
        return Promise.resolve(result)

    };

    //works
    static async editRace(id, time, description, title) {
        try {
            return await Race.findOneAndUpdate({_id: id}, {
                $set: {
                    time: time,
                    description: description,
                    title: title
                }
            })
        } catch (e) {
            return e;
        }
    }

};