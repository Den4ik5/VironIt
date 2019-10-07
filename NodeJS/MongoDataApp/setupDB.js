const constants = require('./const');

module.exports = () => {
    const mongoose = require('mongoose');
    mongoose.connect(constants.DB_HOST, {useNewUrlParser: true});
    mongoose.Promise = global.Promise;
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', function() {
        console.log('Connected')
    });
    return db;
};