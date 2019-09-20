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
