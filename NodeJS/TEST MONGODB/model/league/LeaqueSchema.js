const mongoose = require('mongoose');
const leagueSchema = mongoose.Schema({
    season: {type: String, required: true},
    description: {type: String, required: true},
    title: {type: String, required: true},
    users : {
        type: [mongoose.Schema.Types.ObjectID],
        ref: 'User'
    },
    stages: {
        type: [mongoose.Schema.Types.ObjectID],
        ref: 'Stage'
    }
});

leagueModel = mongoose.model('League', leagueSchema);
module.exports = leagueModel;