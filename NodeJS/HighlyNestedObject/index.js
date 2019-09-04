function getAllPrimitives(obj) {
    let arr =[];
    scan(obj, arr);
    return arr;
}

function scan(obj, arr){
    for(let key in obj){
        if(obj[key] ===  null) {
            arr.push(null);
        }
        else if (typeof obj[key] === "object"){
            scan(obj[key], arr);
        }
        else {
            arr.push(obj[key]);
        }
    }
    return
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

console.log(getAllPrimitives(obj));