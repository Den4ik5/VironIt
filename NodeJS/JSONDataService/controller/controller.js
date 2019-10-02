//Services for JSON
const AddUser = require('../JsonService/addUser');
const GetUser = require('../JsonService/getUser');
const ChangeName = require('../JsonService/changeUserName');
const DeleteUser = require('../JsonService/deleteUser');
//Services for MONGO
/*
const AddUser = require('../MongoService/AddUser');
const GetUser = require('../MongoService/GetUser');
const ChangeName = require('../MongoService/ChangeUser');
const DeleteUser = require('../MongoService/DeleteUser');
*/
module.exports = class Controller {
    constructor(request) {
        this.method = request.method;
        if (this.method === "GET" || this.method === "DELETE") {
            this.id = request.custom.id;
            this.name = request.custom.name
        } else {
            this.id = request.body.id;
            this.name = request.body.name;
        }

    }

    run() {
        if (this.method === "GET") {
            return new GetUser(this.id);
        }
        if (this.method === "POST") {
            return new AddUser(this.name).addUser();
        }
        if (this.method === "PUT") {
            return new ChangeName(this.id, this.name).changeName();
        }
        if (this.method === "DELETE") {
            return new DeleteUser(this.id).deleteUser();
        }
    }
};


