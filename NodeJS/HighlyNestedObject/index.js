function getAllPrimitives(obj) {

    for(let key in obj){
        if(obj[key] ===  null) {
            console.log(null);
        }
        else if (typeof obj[key] === "object"){
            getAllPrimitives(obj[key]);
        }

        else {
            console.log(obj[key]);
        }
    }
}
obj ={
    id :1,
    name: 'newObject',
    relations:{
        relatedObj1:{
            id: 2,
            name: 'relatedObject1',
            relations: {
                relatedObjects: null,
            },
            satisfied : true,
        },
        relatedObj2:{
            id: 3,
            name: 'relatedObject2',
            relations:{
                relatedObjects: [1,2,3,4],
            },
            satisfied: false,
        },
        deletedObj: null,
    },
    isDef: undefined
};

getAllPrimitives(obj);