const constant = require('../../' + __dirname + '/const.js');
module.exports = class League {
    constructor(title, description, season) {
        this.title = title;
        this.description = description;
        this.season = season;
    }
    getDescription(){
        return this.description;
    }
    getTitle(){
        return this.title;
    }
    getSeason(){
        return this.season;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }

};
