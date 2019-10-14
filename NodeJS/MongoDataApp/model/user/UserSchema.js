const mongoose = require('mongoose');
const userSchema =  mongoose.Schema({
    name: {
        firstName: {type: String, required: true},
        lastName: String
    },
    username: {type: String, required: true},
    password: {type: String, required: true}

});

userModel = mongoose.model('User', userSchema);
module.exports = userModel;