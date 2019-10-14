const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/user/UserSchema');
const PasswordEncoder = require('../service/PasswordEncoder');

passport.use(new LocalStrategy({
    username: 'user[username]',
    password: 'user[password]',
}, (username, password, done)=>{
    User.find({username: username}).then((user)=>{
        if(user){
            const passwordEncoder = new PasswordEncoder(username, password);
            const encodedPassword = passwordEncoder.encodePassword();
            if(user.password === encodedPassword){
                return done(null, user);
            }
        }
        return done(null, false, { errors: { 'email or password': 'is invalid' } });

    }).catch(done);
}));
module.exports = passport;