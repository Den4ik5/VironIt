const addUser = require('../service/addUser');
const getUser = require('../service/getUser');
const changeName = require('../service/changeUser');
const deleteUser = require('../service/deleteUser');

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
const postController = (params) =>{
    console.log('i am in a Post controller');
    console.log(params["name"]);
    if(params.name!==undefined) {
        console.log('i shouldnt be here');
        if (addUser(params["name"])) {
            return 200;
        } else return 500;
    }
    return false;
};

const putController = (params) =>{
    console.log('i am in a put controller');
    if(Object.keys(params).length!==0){
        console.log("i shouldn't be here" );
        if(params["name"]){
            changeName(getUser(params["id"]), params["id"]);
            return 200;
        }
    }else{
        return 500;
    }
};

const deleteController = (params) =>{
    console.log("i am in a delete conroller");
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