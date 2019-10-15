const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema =  mongoose.Schema({
    name: {
        firstName: {type: String, required: true},
        lastName: String
    },
    username: {type: String, required: true},
    password: {hash: String, salt: String}
});




userSchema.methods.generateJWT = function() {
    console.log('i am in JWT function');
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
};

userSchema.methods.setPassword = function(password) {
    
    this.password.salt = crypto.randomBytes(16).toString('hex');
    console.log(this.password.salt);
    this.password.hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.password.salt, 10000, 512, 'sha512').toString('hex');
    return this.password.hash === hash;
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