// const deleteUser = (user) =>{
//     const JsonObject = JSON.parse.JSON.stringify(fs.readFileSync('../'+__dirname+'/data.json'));
//     const deletableUser = JsonObject["users"].user;
//     changeableUser["id"] = id;
//     fs.writeFileSync( '../'+__dirname+'/data.json', JSON.stringify(JsonObject));
//     return changeableUser;
// };
//
// const fs = require('fs');

function deleteUser(userId) {
    // const file = fs.readFileSync('../' + __dirname + '/data.json');
    // const data = file.toJSON();
    //
    // data.users = data.users.filter(x => x.id !== userId);
    // fs.writeFileSync( '../' + __dirname + '/data.json', JSON.stringify(data));
    //
    // return true;
    console.log('i am in a delete User Function');
}

module.exports = {
    deleteUser,
}