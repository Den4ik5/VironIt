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



