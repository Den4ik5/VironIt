const User = require('../model/user/UserSchema');
const Race = require('../model/race/RaceSchema');
const League = require('../model/league/LeaqueSchema');
const RegisteredUser = require('../model/user/RegisteredUserSchema');
const PasswordEncoder = require('./PasswordEncoder');
const mongoose = require('mongoose');
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

    //works
    static async deleteUser(userId) {
        let session = null;
        try {
            return await User.createCollection().then(() => mongoose.connection.startSession()).then(_session => {
                session = _session;
                session.startTransaction();
                return User.deleteOne({_id: userId})
            }).then(() => {
                return Race.deleteMany({user: userId});
            }).then(() => {
                return League.updateMany({}, {
                    $pull: {
                        users: userId
                    }
                });
            }).then(() => {
                return session.commitTransaction();
            });
        } catch (e) {
            console.log(e);
            return session.abortTransaction();
        }
    }

    //works
    static async getAllUserRaces(userId) {
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
        } catch (e) {
            return e;
        }
    }

    //works
    static async getUsersLeague(userId) {
        try {
            return User.aggregate([
                {
                    $project: {
                        _id: {
                            $toString: "$_id"
                        },
                        name: "$name",
                        username: "$username"
                    }
                },
                {
                    $lookup: {
                        from: "leagues",
                        localField: "_id",
                        foreignField: "users",
                        as: "league for current user"
                    }
                },
                {$match: {_id: userId}}
            ])
        } catch (e) {
            return e;
        }
    }

    //works
    static async storeUser(userDto) {
        /*{
            "name": {
            "firstName": "Max",
                "lastName": "Mad"
        },
            "username": "MadMax123",
            "password": ""
        }*/
        const user = new User(userDto);
        const passwordEncoder = new PasswordEncoder(user.username, user.password);
        user.password = passwordEncoder.encodePassword();
        try {
            return (await user.save());
        } catch (e) {
            return e;
        }
    }

    //works
    static async editUser(id, username, password) {
        try {
            const passwordEncoder = new PasswordEncoder(username, password);
            const encodedPassword = passwordEncoder.encodePassword();
            return (await User.findOneAndUpdate({_id: id},
                    {
                        $set:
                            {
                                username: username,
                                password: encodedPassword,
                            }
                    }, {new: true})
            )
        } catch (e) {
            return e;
        }
    }

    static async storeRegisteredUser(userDto) {
        const user = new RegisteredUser(userDto);
        try {
            return (await user.save());
        } catch (e) {
            return e;
        }
    }

    static async login(username, password) {
        const passwordEncoder = new PasswordEncoder(username, password);
        const encodedPassword = passwordEncoder.encodePassword();
        try {
            return (await RegisteredUser.find({username: username, password: encodedPassword}));
        } catch (e) {
            return e;

        }
    }
};