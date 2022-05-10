const API_KEY = 'e8b37a46a24e10b4eb307b2eca73d598';
const COORDS = 'cooreds';
const weatherInfo = document.getElementById('weatherInfo');
const weatherIconImg = document.getElementById('weathericon');

function init(){
    askForCoords();
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function gandleSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {latitude, longitude};
    getWeather(latitude, longitude);
}

function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=meteric&lang=en`
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        const weatherDescription = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
        const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIcon}10d@2x.png`;

        weatherInfo.innerHTML = `${temperature} / ${place} / ${weatherDescription}`;
        weatherIconImg.setAttribute('src', weatherIconUrl);
    })
    .catch((error) => console.log('error', error));
}
init();