const fs = require('fs');
const changeName = (user,name)=>{
    // const JsonObject = JSON.parse.JSON.stringify(fs.readFileSync('../'+__dirname+'/data.json'));
    // const changeableUser = JsonObject["users"].user;
    // changeableUser["name"] = name;
    // fs.writeFileSync( '../'+__dirname+'/data.json', JSON.stringify(JsonObject));
    // return changeableUser;
    console.log("i am in a changeNameFunction");
};
module.exports = changeName;