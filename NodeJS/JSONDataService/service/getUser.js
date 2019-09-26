const fs = require('fs');
const PATH = require('../data');
const getUser = (id) =>{
    const contents = fs.readFileSync(PATH);
    const JsonObject =  JSON.parse(contents.toString());
    return JsonObject.users.find(item => +item.id === +id);

};
const getAllUsers = () =>{
    return JSON.parse(fs.readFileSync(PATH).toString());
};

module.exports ={
    getUser,
    getAllUsers
};