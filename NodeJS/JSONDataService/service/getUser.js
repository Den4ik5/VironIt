const fs = require('fs');
const PATH = require('../constants');
module.exports = class GetUser {
    constructor(id){
        this.id = id;
        if(this.id!== undefined){
            return this.getUser();
        }
        else return this.getAllUsers();
    }
    getUser(){
        const contents = fs.readFileSync(PATH);
        const JsonObject =  JSON.parse(contents.toString());
        return JsonObject.users.find(item => +item.id === +this.id);
    }
    getAllUsers(){
        return JSON.parse(fs.readFileSync(PATH).toString());
    }
};
