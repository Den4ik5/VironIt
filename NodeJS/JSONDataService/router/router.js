const app = require('../app');
const Controller = require('../controller/controller');
const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');

router.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
router.use('/', function (request,response, next) {
    request.custom = [];
    if(Object.keys(request.query).length!==0){
        request.custom.id = request.query.id;
        request.custom.name = request.query.name;
    }
    next();
});
router.use('/', bodyParser.urlencoded({ extended: false }));
router.use('/', bodyParser.json());

router.get('/', function (request, response) {
    const resp = new Controller(request).run();

    console.log("resp = " + JSON.stringify(resp));
    if(resp!==false){
        response.send(JSON.stringify(resp));
    }
    response.statusCode = 404;
    response.send('Not founded');
});

router.post('/', function (request, response) {
    const state = new Controller(request).run();
    if(state) {
        response.statusCode = 200;
        response.send('successfully added');
    }
    response.statusCode = 500;
    response.send('adding error');
});

router.put('/', function (request, response) {
    const resp = new Controller(request);
    if(resp){
        response.statusCode = 200;
        response.end(JSON.stringify(resp));
    }
    response.statusCode = 500;
    response.end('changing error');
});

router.delete('/', function (request, response) {
    const state = new Controller(request).run();
    console.log("state = " + state);
    if(state === true){
        response.statusCode = 200;
        response.send('Successfully deleted');
    }
    response.statusCode = 500;
    response.send('deleting error');
});

module.exports = router;
