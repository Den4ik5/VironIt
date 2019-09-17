 const displayData = {
     city: document.querySelector("#city"),
     temperature: document.querySelector("#temperature"),
     weather: document.querySelector("#weather"),
     firstDay: document.querySelector("#firstDay"),
     secondDay: document.querySelector("#secondDay"),
     thirdDay: document.querySelector("#thirdDay"),
     fourthDay: document.querySelector("#fourthDay"),
     fifthDay: document.querySelector("#fifthDay"),

 };
const getWeatherForToday = () => {

    const geoLocation =  getCity();
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function(){
        let response = JSON.parse(xhr.responseText);
        displayData.city.innerHTML = response.name;
        displayData.temperature.innerHTML = Math.round(((+response.main.temp-32)*5/9)) +' celsium';
        let detailWeather = response.weather[0];

        displayData.weather.innerHTML = detailWeather.description;
    }, false);
    let target = "http://api.openweathermap.org/data/2.5/weather?lat=" + geoLocation.latitude + "&lon="
        + geoLocation.longitude + "&appid=65d460d769edf9c69fd67d1c13bf077e&units=imperial" ;

    xhr.open("GET", target, true);
    xhr.send();
};
const getWeatherForFiveDays = () => {
    getWeatherForToday();
  const geoLocation = getCity();
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
      let responce = JSON.parse(xhr.responseText);
      let parsedList = parseList(responce);
      let parentNode = document.getElementById('three-ours-weather');
      while (parentNode.firstChild){
          parentNode.removeChild(parentNode.firstChild);
      }
      for (let i = 0; i < parsedList.length; i++) {
          parentNode.appendChild(createGrid(parsedList[i]));
      }
  });
    let target = "http://api.openweathermap.org/data/2.5/forecast?lat=" + geoLocation.latitude + "&lon="
        + geoLocation.longitude + "&appid=65d460d769edf9c69fd67d1c13bf077e&units=imperial" ;
    xhr.open("Get", target, true);
    xhr.send();
};


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
const createGrid = (list) => {
     let grid = document.createElement('table');
     grid.style.width = '50%';
     grid.style.border = '1px solid green';
     grid.style.position = 'center';
     grid.style.marginLeft = 'auto';
     grid.style.marginRight = 'auto';
     grid.style.marginBottom = '20px';
     grid.style.background = 'black';
     grid.style.color = 'green';



     let count = 0;
     while(count<list.length+2){
         let line = grid.insertRow();
         for(let j =0; j<5; j++){
             let column = line.insertCell();
             column.className = 'grid';
             column.style.width = '30px';
             column.style.border = '1px solid green';

             if(count === 0){
                 line.setAttribute('colspan', 5);
                 column.appendChild(document.createTextNode(parseDate(list[count].dt_txt)[0] ));
                 break;
             }
             switch(j){
                 case 0:
                     if(count === 1){
                         column.appendChild(document.createTextNode('time'));
                         break;
                     }
                     column.appendChild(document.createTextNode(parseDate(list[count-2].dt_txt)[1] ));
                     break;

                 case 1:
                     if(count === 1){
                         column.appendChild(document.createTextNode('temperature'));
                         break;
                     }
                     column.appendChild(document.createTextNode(Math.round ((list[count-2].main.temp-32)*9/5)));
                     break;

                 case 2:
                     if(count === 1){
                         column.appendChild(document.createTextNode('pressure'));
                         break;
                     }
                     column.appendChild(document.createTextNode(list[count-2].main.pressure));
                     break;

                 case 3:
                     if(count === 1){
                         column.appendChild(document.createTextNode('conditions'));
                         break;
                     }
                     column.appendChild(document.createTextNode(list[count-2].weather[0].description));
                     break;

                 case 4:
                     if(count === 1){
                         column.appendChild(document.createTextNode('wind Speed'));
                         break;
                     }
                     column.appendChild(document.createTextNode(list[count-2].wind.speed));
                     break;
             }
         }
         count ++;
     }
     return grid;
 };
const getCity = () => {
     let a = document.getElementById('chooseCitySelector').value;
     switch (+a) {
         case 0:
             return {latitude: 53.9023, longitude: 27.5619};
         case 1:
             return {latitude: 52.4345, longitude: 30.9754};
         case 2:
             return {latitude: 52.0938, longitude: 23.6852};
     }
 };
getWeatherForToday();



