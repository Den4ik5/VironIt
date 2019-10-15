const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../model/user/UserSchema');

module.exports = passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({username: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username'});
            }
            if (!user || !user.validatePassword(password)) {
                return done(null, false, {message: "Incorrect password"});
            }
            return done(null, user);
        });
    }
));
