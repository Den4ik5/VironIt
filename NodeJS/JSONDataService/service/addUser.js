const fs = require('fs');
const PATH = require('../constants');
const createJsonUser = require('../model/JSONUser');
const User = require('../model/User');

const addUserLogic = (id, name) =>{
    return  new User(id, name);
};
const addUser =  (name) => {
    console.log("i am in addUserFunction");
    const jsonObject = JSON.parse(fs.readFileSync(PATH).toString());
    const id = ++jsonObject.keys;
    const comparableLength = jsonObject.users.length;
    jsonObject.users.push(createJsonUser(addUserLogic(id, name)));
    const comparableLength2 = jsonObject.users.length;
    fs.writeFileSync(PATH, JSON.stringify(jsonObject));
    return comparableLength < comparableLength2;
};
module.exports = addUser;