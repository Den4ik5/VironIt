const mongoose = require('mongoose');
const registeredUserSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

registeredUserModel = mongoose.model('RegisteredUser', registeredUserSchema);
module.exports = registeredUserModel;