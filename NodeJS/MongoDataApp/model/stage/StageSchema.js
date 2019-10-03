const mongoose = require('mongoose');
const stageSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    place: {type: String, required: true},
    league: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'League'
    }
});

stageModel = mongoose.model('Stage', stageSchema);
module.exports = stageModel;