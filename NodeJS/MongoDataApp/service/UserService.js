const User = require('../model/user/UserSchema');
const Race = require('../model/race/RaceSchema');
const League = require('../model/league/LeaqueSchema');
module.exports = class UserService {

    //works
    static async getUser(id) {
        console.log(id);
        try {
            return (await User.findById(id));
        } catch (e) {
            return e;

        }
    }
    //works
    static async getAllUsers() {
        try {
            return (await User.find({}));
        } catch (e) {
            return e;
        }
    }
    //hueta but works
    // static async getAllUserRaces(userId){
    //     try {
    //         return (await Race.find({user: userId}));
    //     }
    //     catch (e) {
    //         return e;
    //     }
    // }
    //hueta
    static async deleteUser(id) {
        try {
            return await (() => {
                    User.deleteOne({_id: id});
                    Race.deleteMany({user: id});
                    League.updateMany({},
                        {
                            $set:
                                {
                                    users: users.filter((el) => el !== id)
                                }
                        }
                    )
                    // for (let league in League.find({})) {
                    //     league.users.filter(user => user.id !== id);
                    // }
                }
            );
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    //works
    static async getAllUserRaces(userId){
        try {
            return await User.aggregate([
                {
                    $project: {
                        _id: {
                            $toString: "$_id",
                        },
                        name: "$name",
                        username: "$username"
                    },
                },
                {
                    $lookup:
                        {
                            from: "races",
                            localField: "_id",
                            foreignField: "user",
                            as: "raceForThisUser"
                        }
                },
                {$match: {_id: userId}},
            ]);
        }catch (e) {
            return e;
        }
    }
    //refactor
    static async getUsersLeague(userId){
        try {
            User.aggregate([
                {
                    $project: {
                        _id:{
                            $toString: "$_id"
                        },
                        name: "$name",
                        username: "$username"
                    }
                },
                {
                    $lookup: {
                        from: "league",
                        localField: "_id",
                        foreignField: "users",
                        as: "league for current user"
                    }
                },
                {$match: {_id: userId}}
            ])
        }catch (e) {
            return e;
        }
    }
    //works
    static async storeUser(userDto) {
        const user = new User(userDto);
        try {
            return (await user.save());
        } catch (e) {
            return e;
        }
    }
    //works
    static async editUser(id, username) {
        try {
            return (await User.findOneAndUpdate({_id: id},
                    {
                        $set:
                            {
                                username: username
                            }
                    }, {new: true})
            )
        } catch (e) {
            return e;
        }
    }
};