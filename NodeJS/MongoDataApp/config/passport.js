const passport = require('passport');
const LocalStrategy = require('passport-local');
const Service = require('../service/UserService');

// module.exports = passport.use(new LocalStrategy(
//     function (username, password, done) {
//         User.findOne({username: username}, function (err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {message: 'Incorrect username'});
//             }
//             if (!user || !user.validatePassword(password)) {
//                 return done(null, false, {message: "Incorrect password"});
//             }
//             return done(null, user);
//         });
//     }
// ));

passport.use(new LocalStrategy({
    username: 'user[username]',
    password: 'user[password]',
}, async (username, password, done) => {
    await Service.getUserByUsername(username)
        .then((user) => {
            console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbb');
            if(user){
                if(user.validatePassword(password)===true) {
                    console.log('i shouldn"t be here');
                    return done(null, user);
                }
            }

            return done(null, false, { errors: { 'email or password': 'is invalid' } });
        }).catch(done);
}));