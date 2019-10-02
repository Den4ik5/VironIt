const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    name: {
        firstName: {type: String, required: true},
        lastName: String
    },
    username: {type: String, required: true},
});

userModel = mongoose.model('User', userSchema);
module.exports = userModel;