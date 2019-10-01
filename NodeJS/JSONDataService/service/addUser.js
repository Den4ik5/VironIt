const fs = require('fs');
const PATH = require('../constants');
const createJsonUser = require('../model/JSONUser');
const User = require('../model/User');

module.exports = class AddUser{
    constructor(name){
        this.name = name;
    }
     addUser(){
        const jsonObject = JSON.parse(fs.readFileSync(PATH).toString());
        const id = ++jsonObject.keys;
        const comparableLength = jsonObject.users.length;
        jsonObject.users.push(createJsonUser(new User(id, this.name)));
        const comparableLength2 = jsonObject.users.length;
        fs.writeFileSync(PATH, JSON.stringify(jsonObject));
        return comparableLength < comparableLength2;
    }
};

