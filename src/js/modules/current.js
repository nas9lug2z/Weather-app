//cache the dom
const $currentCity = document.querySelector('.search__city');
const $currentTemp = document.querySelector('.current__temp-num');
const $currentDescription = document.querySelector('.current__summary');
const $currentWind = document.querySelector('.current__wind');
const $currentHumidity = document.querySelector('.current__humidity');
const $currentPrecip = document.querySelector('.current__precipitation');

export const setCurrentWeather = (weatherData, units) => {
    let currentWeather = weatherData;
    console.log(currentWeather)
}