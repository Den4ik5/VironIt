const setupDB = require('setupDB');
const express = require('express');
const constants = require('const');
const cookieParser = require('cookie-parser');

//my dependencies
const usersRouter = require('routes/user');
const leaguesRouter = require('routes/league');
const racesRouter = require('routes/race');
const stagesRouter = require('routes/stage');

app = express();
app.listen(constants.PORT, () => {
    console.log('server is listening http://' + constants.HOST + ':' + constants.PORT);
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/races', racesRouter);
app.use('/stages', stagesRouter);
app.use('/leagues', leaguesRouter);
setupDB();
module.exports = app;




