const addUser = require('../service/addUser');
const getUser = require('../service/getUser');
const changeName = require('../service/changeUserName');
const deleteUser = require('../service/deleteUser');
class Controller{
    constructor(){

    }
    getMethod(){}
    postMethod(){}
    putMethod(){}
    deleteMethod(){}
}


const getController = (params) =>{
    if(Object.keys(params).length!==0){
        const user =  getUser.getUser(params.id);
        return user ? user : false;
    }
    else {
        const users = getUser.getAllUsers();
        return users ? users : false;
    }
};
const postController = (name) =>{
    if(name!==undefined) {
        if (addUser(name)) {
            return true;
        }
    }
    return false;
};

const putController = (id, name) =>{
    if(name!==undefined && id!== undefined){
        if(changeName(id, name)){
            return true;
        }
    }
    return false;
};

const deleteController = (params) =>{
    if(Object.keys(params).length!==0) {
        return deleteUser(params.id);
    }
    return false;
};

module.exports ={
  getController,
  postController,
  putController,
  deleteController
};