const fs = require('fs');
const PATH = require('../constants');
const changeName = (id,name)=>{
     const jsonObject = JSON.parse(fs.readFileSync(PATH).toString());
     const index = jsonObject.users.findIndex(item => +item.id === +id);
     const prevName = jsonObject.users[index].name;
     console.log(prevName);
     jsonObject.users[index].name = name;
    fs.writeFileSync(PATH, JSON.stringify(jsonObject));
    return prevName !== name;
};
module.exports = changeName;