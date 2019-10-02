const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/', {
    useMongoClient : true
})
    .then(() => console.log('MongoDb has started ...'))
;
module.exports = class Service {


};