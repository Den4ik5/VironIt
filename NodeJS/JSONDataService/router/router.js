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
    next();
});

router.get('/', function (request, response) {
    const resp = controllers.getController(request.custom);
    if(resp!==false){
        response.end(JSON.stringify(resp));
    }
    else{
        response.statusCode = 404;
        response.end('Not Founded');
    }
});

router.post('/', function (request, response) {
    console.log("i am in a Post route");
    response.statusCode = controllers.postController(request.custom);
    console.log(response.statusCode);
    console.log(123);
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
    controllers.deleteController(request.custom);
    response.statusCode = 500;
    response.end('end of a delete response');
});

module.exports = router;
