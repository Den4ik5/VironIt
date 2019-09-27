const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const CONSTANTS      = require('./app/constants');
const app            = express();

app.use(bodyParser.urlencoded({extended:true}));
require('./app/routes')(app, {});


app.listen(CONSTANTS.PORT, () => {
    console.log('We are live on ' + CONSTANTS.PORT);
});

MongoClient.connect(db.url, (err, database)=>{
    if(err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(CONSTANTS.PORT, () => {
        console.log('We are live on ' + CONSTANTS.PORT);
    })
});