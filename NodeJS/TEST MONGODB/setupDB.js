const constants = require(__dirname+'/const.js');

module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect(constants.DB_HOST, {useNewUrlParser: true});
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    mongoose.connection.once('open', function() {
        console.log('Connected')
    });
};