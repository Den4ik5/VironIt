const PATH = require('../constants');
const fs = require('fs');
module.exports = class DeleteUser{
    constructor(id){
        this.id =id;
    }
    deleteUser(){
        const jsonObject = JSON.parse(fs.readFileSync(PATH).toString());
        const comparableLength = jsonObject.users.length;
        jsonObject.users = jsonObject.users.filter(x => +x.id !== +this.id);
        const comparableLength2 = jsonObject.users.length;
        fs.writeFileSync(PATH, JSON.stringify(jsonObject));
        return comparableLength2 < comparableLength;
    }
};

