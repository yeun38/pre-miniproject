// temp
const API_KEY='a2e8922539a2e4f37866cc7d173c8be2'
// 
// test url: https://api.openweathermap.org/data/2.5/weather?lat=37.5980316&lon=127.0936762&appid=a2e8922539a2e4f37866cc7d173c8be2&units=metric&lang=kr

askForCoords();
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('위치를 찾을 수 없습니다.');
}

function getWeather(lat, lon) {
    console.log("현재 좌표: "+lat, lon);
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temparature = json.main.temp;
            const place = json.name;
            const icon = json.weather[0].icon;
            weather.innerHTML = 
            `
            <strong>${temparature}℃</strong>
            <img src="http://openweathermap.org/img/w/${icon}.png" />`;
            
            // <span>도시: ${place}</span>
        });
}