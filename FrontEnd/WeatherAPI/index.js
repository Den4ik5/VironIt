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
const parentNode = document.getElementById('three-ours-weather');
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
  const geoLocation = getCity();
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
      let responce = JSON.parse(xhr.responseText);
      // for( let i=0; i< responce.list.length; i++){
      //       parentNode.appendChild(createChildNode(responce.list[i].wind.speed));
      // }
  });
    let target = "http://api.openweathermap.org/data/2.5/forecast?lat=" + geoLocation.latitude + "&lon="
        + geoLocation.longitude + "&appid=65d460d769edf9c69fd67d1c13bf077e&units=imperial" ;
    xhr.open("Get", target, true);
    xhr.send();
};
const createChildNode = (value) => {
    let nodeEl = document.createElement('p');
    nodeEl.className = 'created-node-ui';
    nodeEl.innerHTML = value;
    return nodeEl;
};
const testCreateNodeChild = (list) =>{
    for(let i=0; i<list.length; i++) {
        let nodeEl = document.createElement('table');
        let nodeElDate = document.createElement('th');
        nodeElDate.colSpan = '5';
        nodeElDate.innerHTML = parseDate(list[i].clouds.dt_txt)[0];
        nodeEl.appendChild(nodeElDate);

    }
 };
const parseDate = (dt_txt) =>{
    return  dt_txt.split(' ');

};
const tableCreate = (rows) => {
     let table = document.createElement('table');
     table.style.width = '400px';
     table.style.border = '1px solid black';
     let count = 0;
     while(count<rows){
         let line = table.insertRow();
         for(let j =0; j<5; j++){
             let row = line.insertCell();
             row.style.width = '30px';
             row.style.border = '1px solid black';
             if(count === 0){
                 line.setAttribute('colspan', 5);
                 row.appendChild(document.createTextNode('header'));
                 break;
             }

             switch(j){
                 case 0:
                     if(count === 1){
                         row.appendChild(document.createTextNode('time'));
                         break;
                     }
                     row.appendChild(document.createTextNode('1 '));
                     break;
                 case 1:
                     if(count === 1){
                         row.appendChild(document.createTextNode('temperature'));
                         break;
                     }
                     row.appendChild(document.createTextNode('2 '));
                     break;
                 case 2:
                     if(count === 1){
                         row.appendChild(document.createTextNode('pressure'));
                         break;
                     }
                     row.appendChild(document.createTextNode('3 '));
                     break;
                 case 3:
                     if(count === 1){
                         row.appendChild(document.createTextNode('weather'));
                         break;
                     }
                     row.appendChild(document.createTextNode('4 '));
                     break;
                 case 4:
                     if(count === 1){
                         row.appendChild(document.createTextNode('windSpeed'));
                         break;
                     }
                     row.appendChild(document.createTextNode('5 '));
             }
         }
         count ++;
     }
     return table;
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
const chooseDate = () =>{

};
const formatDate = () => {
     let date = new Date();
     let dd = date.getDate();
     if (dd < 10) dd = '0' + dd;

     let mm = date.getMonth() + 1;
     if (mm < 10) mm = '0' + mm;

     let yy = date.getFullYear() % 100 ;
     if (yy < 10) yy = '0' + yy;
     return {date: dd, months: mm, year: yy};
 };
const setDates = () => {
     const date = formatDate();
     displayData.firstDay.innerText = ( (date.date+'.'+date.months+'.'+ date.year));
     displayData.secondDay.innerHTML = ((++date.date +'.'+ date.months+'.'+ date.year));
     displayData.thirdDay.innerHTML = ((++date.date +'.'+ date.months+'.'+ date.year));
     displayData.fourthDay.innerHTML = ((++date.date +'.'+ date.months+'.'+ date.year));
     displayData.fifthDay.innerHTML = ((++date.date +'.'+ date.months +'.'+ date.year));
 };
setDates();

