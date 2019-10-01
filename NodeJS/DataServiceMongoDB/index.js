const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const CONSTANTS = require('./app/constants.js');


const app = express();
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

let dbClient;

app.use(express.static(__dirname + "/public"));

mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db(CONSTANTS.DB_NAME).collection(CONSTANTS.COLLECTION_NAME);
    app.listen(CONSTANTS.PORT, function(){
        console.log("Сервер ожидает подключения...");
    });
});
module.exports = {
    app,
    objectId
};


// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});