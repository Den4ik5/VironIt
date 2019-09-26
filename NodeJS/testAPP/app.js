const express = require('express');
const app = express();

const host='127.0.0.1';
const port = 8000;

app.listen(port, function () {
    console.log('server is listening http://'+host+':'+port);
});
app.use(function (request,response, next) {
    const queryString = request.url.split('?')[1];
    request.params = [];
    if(queryString !=='undefined'){
        if(queryString.indexOf('id=')!==-1) {
            request.params["id"] = queryString.split('id=')[1].split('&')[0] || queryString.split('id')[1];
        }
        if(queryString.indexOf('name=')!==-1) {
            request.params["name"] = queryString.split('name=')[1].split('&')[0] || queryString.split('name')[1];
        }
    }
    console.log(request.params);
    next();
});
