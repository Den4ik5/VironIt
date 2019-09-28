const addUser = require('../service/addUser');
const getUser = require('../service/getUser');
const changeName = require('../service/changeUserName');
const deleteUser = require('../service/deleteUser');
class Controller{
    constructor(request){
        this.method = request.method;
        if(this.method === "GET" || this.method === "DELETE") {
            this.id = request.params.id;
            this.name = request.params.name
        }
        else {
            this.id = request.body.id;
            this.name = request.body.name;
        }

        this.id = request.params.id;
        if(this.id!==undefined){
            this.getMethod = getUser.getUser(this.id);
        }
        else {
            this.getMethod = getUser.getAllUsers();
        }
        this.body = request.body;
        this.name = request.params.name;
        this.postMethod = addUser(this.name);
        this.putMethod = changeName(this.id, this.name);
        this.deleMethod = deleteUser(this.id);
        }
    }



    setAction();
    postMethod();
    putMethod();
    deleteMethod();
}


const getController = (params) =>{

};
const postController = (name) =>{

};

const putController = (id, name) =>{

};

const deleteController = (params) =>{

};

module.exports ={
  getController,
  postController,
  putController,
  deleteController
};