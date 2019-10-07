const mongoose = require('mongoose');
const raceSchema = mongoose.Schema({
    time: {type: String, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    user: {
        type: String,
        required: true
    },
    stage: {
        type: String,
        required: true
    }
});

raceModel = mongoose.model('Race', raceSchema);
module.exports = raceModel;