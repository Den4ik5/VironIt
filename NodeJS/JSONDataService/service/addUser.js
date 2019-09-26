const fs = require('fs');
const addUserLogic = (id, name) =>{
    return  new User(id, name);
};
const addUser =  (name) => {
    console.log("i am in addUserFunction");
    // const JsonObject = JSON.parse.JSON.stringify(fs.readFileSync('../'+__dirname+'/data.json'));
    // const id = Object.keys(JsonObject).length;
    // JsonObject["users"].push(createJSONUser(addUserLogic(id, name)));
    // fs.writeFileSync( '../'+__dirname+'/data.json', JSON.stringify(JsonObject));
};
module.exports = addUser;