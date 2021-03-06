const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const CONSTANT = require('../../const');

const userSchema = mongoose.Schema({
    name: {
        firstName: {type: String, required: true},
        lastName: String
    },
    username: {type: String, required: true},
    password: {
        hash: String,
        salt: String
    },
    isAdmin: {type: String, default: "false"}
});

userSchema.methods.generateJWT = function () {
    console.log('i am in JWT function');
    const today = new Date();
    let expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        isAdmin: this.isAdmin,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, CONSTANT.SECRET);
};



userSchema.methods.setPassword = function (password) {

    this.password.salt = crypto.randomBytes(16).toString('hex');
    console.log(this.password.salt);
    this.password.hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
    console.log((this.password.hash === hash));
    return this.password.hash.toString() === hash.toString();
};

userSchema.methods.toAuthJSON = async function () {
    console.log('i am in toAUTH function');
    return await {
        _id: this._id,
        username: this.username,
        name: this.name,
        isAdmin: this.isAdmin,
        token: this.generateJWT(),
    };
};

userModel = mongoose.model('User', userSchema);
module.exports = userModel;