const User = require('../model/user/UserSchema');
const Race = require('../model/race/RaceSchema');
const League = require('../model/league/LeaqueSchema');
module.exports = class UserService {
    static async getUser(id) {
        try {
            return (await User.findById(id));
        } catch (e) {
            return e;

        }
    }

    static async getAllUsers() {
        try {
            return (await User.find({}));
        } catch (e) {
            return e;
        }
    }

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
            return e;
        }
    }

    static async storeUser(firstName, lastName, username) {
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            username: username
        });
        try {
            return (await user.save());
        } catch (e) {
            return e;
        }
    }

    static async editUser(id, username) {
        try {
            return (await User.updateOne({_id: id},
                    {
                        $set:
                            {
                                username: username
                            }
                    })
            )
        } catch (e) {
            return e;
        }
    }
};