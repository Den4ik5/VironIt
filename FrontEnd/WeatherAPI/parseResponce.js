const parseDate = (dt_txt) =>{
    return  dt_txt.split(' ');
};
const parseList = (list) =>{
    let parsedList = [];
    let j =-1;
    while(j!==list.list.length-1){
        let temp = (parseListLogic(++j, list));
        parsedList.push(temp[0]);
        j = temp[1];
    }
    return parsedList;
};
function parseListLogic(j, list) {
    let tempList = [];
    let k;
    for (let i=j; i<list.list.length; i++){
        let tempTime = parseDate(list.list[i].dt_txt);
        if((tempTime[1].charAt(0)==='2' && tempTime[1].charAt(1)==='1')){
            tempList.push(list.list[i]);
            return [tempList, i];
        }
        tempList.push(list.list[i]);
        k=i;
    }
    return [tempList, k];
}