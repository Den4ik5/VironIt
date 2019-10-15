const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/user/UserSchema');
const PasswordEncoder = require('../service/PasswordEncoder');

module.exports = passport.use(new LocalStrategy({
    username: 'user[username]',
    password: 'user[password]',
}, (username, password, done)=>{
    User.find({username: username}).then((user)=>{
        if(user){
            if(PasswordEncoder.checkPassword(user.password.publicKey, password, user.password.password)){
                console.log("here should be authorized");
                return done(null, user);
            }
        }
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
    }).catch(done);
}));
