const setupDB = require(__dirname + '/setupDB.js');
const express = require('express');
const constants = require(__dirname + '/const.js');
app = express();


app.listen(constants.PORT, () => {
    console.log('server is listening http://' + constants.HOST + ':' + constants.PORT);
});

setupDB();





