const express = require('express');
const app = express();
const router = require('./router/router');


const host='127.0.0.1';
const port = 8000;

app.listen(port, function () {
    console.log('server is listening http://'+host+':'+port);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/', router);

module.exports = app;
