function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
askForCoords();
function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    // saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position) {
    console.log('Cant get your position.');
}

function getWeather(latitude, longitude){
    console.log(latitude, longitude);
}