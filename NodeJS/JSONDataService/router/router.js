const app = require('../app');
const controllers = require('../controller/controller');
const express = require('express');
const router = new express.Router();
const bodyParser = require('body-parser');

router.use('/', function (request,response, next) {
    request.custom = [];
    if(Object.keys(request.query).length!==0){
        request.custom.id = request.query.id;
        request.custom.name = request.query.name;
    }
    if(request.body){
        console.log("i have a body");
    }
    next();
});
router.use('/', bodyParser.urlencoded({ extended: false }));
router.use('/', bodyParser.json());

router.get('/', function (request, response) {
    const resp = controllers.getController(request.custom);
    if(resp!==false){
        response.end(JSON.stringify(resp));
    }
    response.statusCode = 404;
    response.end('Not Founded');
});

router.post('/', function (request, response) {
    console.log(request.body);
    console.log("i am in a Post route");
    const state = controllers.postController(request.body.name);
    if(state) {
        response.statusCode = 200;
        response.end('successfully added');
    }
    response.statusCode = 500;
    response.end('adding error');
});

router.put('/', function (request, response) {
    console.log("i am in a Put route");

    response.statusCode = controllers.putController(request.custom);
    response.send();
    response.end();

});

router.delete('/', function (request, response) {
    const state = controllers.deleteController(request.custom);
    if(state === true){
        response.statusCode = 200;
        response.end('Succesfully deleted');
    }
    response.statusCode = 500;
    response.end('deleting error');
});

module.exports = router;
