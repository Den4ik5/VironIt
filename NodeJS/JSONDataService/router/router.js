const app = require('../app');
const controllers = require('../controller/controller');
const express = require('express');
const router = new express.Router();

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

router.get('/', function (request, response) {
    const resp = controllers.getController(request.custom);
    if(resp!==false){
        response.end(JSON.stringify(resp));
    }
    response.statusCode = 404;
    response.end('Not Founded');
});

router.post('/', function (request, response) {
    request.body= 123;
    console.log(JSON.stringify(request.body));
    console.log("i am in a Post route");
    response.statusCode = controllers.postController(request.custom);
    console.log(response.statusCode);
    response.statusCode = 500;
    response.end('end of a response');
});

router.put('/', function (request, response) {
    console.log("i am in a Put route");

    response.statusCode = controllers.putController(request.custom);
    response.send();
    response.end();

});

router.delete('/', function (request, response) {
    console.log("i am in a Delete route");
    const state = controllers.deleteController(request.custom);
    if(state === true){
        response.statusCode = 200;
        response.end('Succesfully deleted');
    }
    response.statusCode = 500;
    response.end('deleting error');
});

module.exports = router;
