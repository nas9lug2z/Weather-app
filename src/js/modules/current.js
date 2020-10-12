import { capitalize } from "./../utils/auxiliary"
import { getAnimatedIcon } from "./../utils/utils"


//cache the dom
const $currentCity = document.querySelector('.search__city');
const $currentDescription = document.querySelector('.current__summary');
const $currentTemp = document.querySelector('.current__temp-num');
const $currentWind = document.querySelector('.current__wind p');
const $currentHumidity = document.querySelector('.current__humidity p span');
const $currentPressure = document.querySelector('.current__precipitation p span');
const $currentIcon = document.querySelector('.current__icon');


export const setCurrentWeather = (weatherData, units = 'metric') => {
    let weather = weatherData;

    //render the dom
    $currentCity.innerHTML = `${weather.name}, ${weather.sys.country}`;
    $currentDescription.innerHTML = capitalize(weather.weather[0].description);
    $currentTemp.innerHTML = `${Math.round(weather.main.temp)}&#176;`;
    $currentWind.innerHTML = `<span>${weather.wind.speed}</span> ${units === 'metric' ? 'mps' : 'mph'}`;
    $currentHumidity.innerHTML = weather.main.humidity;
    $currentPressure.innerHTML = weather.main.pressure;

    //render the icon
    $currentIcon.innerHTML = getAnimatedIcon(weather.weather[0].main.toLowerCase());
}


export const amplifyForecast = (weatherData, units = 'metric') => {
    let weather = weatherData;

    //render the dom
    $currentDescription.innerHTML = capitalize(weather.weather[0].description);
    $currentTemp.innerHTML = `${Math.round(weather.temp.max)}&#176;`;
    $currentWind.innerHTML = `<span>${weather.wind_speed}</span> ${units === 'metric' ? 'mps' : 'mph'}`;
    $currentHumidity.innerHTML = weather.humidity;
    $currentPressure.innerHTML = weather.pressure;

    //render the icon
    $currentIcon.innerHTML = getAnimatedIcon(weather.weather[0].main.toLowerCase());
}