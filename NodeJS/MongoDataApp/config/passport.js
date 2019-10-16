const passport = require('passport');
const LocalStrategy = require('passport-local');
const Service = require('../service/UserService');

passport.use(new LocalStrategy({
    username: 'user[username]',
    password: 'user[password]',
}, async (username, password, done) => {
    await Service.getUserByUsername(username)
        .then((user) => {
            if(user){
                if(user.validatePassword(password)===true) {
                    return done(null, user);
                }
            }
            return done(null, false, { errors: { 'email or password': 'is invalid' } });
        }).catch(done);
}));