const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema =  mongoose.Schema({
    name: {
        firstName: {type: String, required: true},
        lastName: String
    },
    username: {type: String, required: true},
    password: {password: String, publicKey: String}
});

userSchema.methods.generateJWT = function() {
    console.log('i am in JWT function');
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
};

userSchema.methods.toAuthJSON = function() {
    console.log('i am in toAUTH function');
    return {
        _id: this._id,
        username: this.username,
        name: this.name,
        token: this.generateJWT(),
    };
};


userModel = mongoose.model('User', userSchema);
module.exports = userModel;