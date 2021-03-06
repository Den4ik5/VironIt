const setupDB = require('./config/setupDB');
const express = require('express');
const constants = require('./const');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passport');


//my dependencies
const usersRouter = require('./routes/user');
const leaguesRouter = require('./routes/league');
const racesRouter = require('./routes/race');
const stagesRouter = require('./routes/stage');

const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger');

app = express();
app.listen(constants.PORT, () => {
    console.log('server is listening http://' + constants.HOST + ':' + constants.PORT);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'passport', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));



app.use('/users', usersRouter);
app.use('/races', racesRouter);
app.use('/stages', stagesRouter);
app.use('/leagues', leaguesRouter);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

setupDB();
module.exports = app;




