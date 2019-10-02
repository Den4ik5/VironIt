const mongoose = require('mongoose');
const raceSchema = mongoose.Schema({
    time: {type: String, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    }
});

raceModel = mongoose.model('Race', raceSchema);
module.exports = raceModel;