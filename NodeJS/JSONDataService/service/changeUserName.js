const fs = require('fs');
const PATH = require('../constants');

class ChangeName {
     constructor(id, name){
          this.id = id;
          this.name = name;
          this.changeName();
     }
     changeName(){
          const jsonObject = JSON.parse(fs.readFileSync(PATH).toString());
          const index = jsonObject.users.findIndex(item => +item.id === +this.id);
          const prevName = jsonObject.users[index].name;
          jsonObject.users[index].name = this.name;
          fs.writeFileSync(PATH, JSON.stringify(jsonObject));
          return prevName !== this.name;
     }

}

module.exports = ChangeName;