import { firebrick } from "color-name";
import { setCurrentWeather } from './current';
import { setDailyWeather } from './daily';
import { passCityName } from './units_toggle';

//cache the dom
const $spinner = document.querySelector('.spinner-wrapper');
const $searchInput = document.querySelector('.search__input');
const $searchTrigger = document.querySelector('.search__trigger');

//variables
const weatherAPIKey = '49b4a812166d6a8b0893fc1bb58dac83';
const weatherEndPoint = 'https://api.openweathermap.org';
let cityName = 'Kiev';
let units = 'metric';

//get current units from toggle module
export const passUnits = data => {
    units = data;
}


//search click
export const initializeSearch = _ => {
    $searchTrigger.addEventListener('click', e => {
        e.preventDefault();
        $searchInput.classList.toggle('search__input--open');
        $searchInput.focus();

    })
}

//get user input
export const getUserInput = _ => {
    $searchInput.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            cityName = $searchInput.value;
            getWeatherData(cityName, units);
            passCityName(cityName);
            $searchInput.value = '';
        }
    })
}


export const getWeatherData = async (city, units = 'metric') => {
    //--CURRENT

    const currentWeatherLink = `${weatherEndPoint}/data/2.5/weather?q=${city}&units=${units}&appid=${weatherAPIKey}`;
    $spinner.classList.toggle('spinner-wrapper--active');
    const fetchCurrentData = await fetch(currentWeatherLink);
    const parsedCurrent = await fetchCurrentData.json();

    //insert into DOM
    const currentWeather = parsedCurrent;
    setCurrentWeather(currentWeather, units);

    //get lat and long
    let lat = parsedCurrent.coord.lat;
    let lon = parsedCurrent.coord.lon;

    //--DAILY

    const dailyWeatherLink = await `${weatherEndPoint}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${weatherAPIKey}`;
    const fetchDailyData = await fetch(dailyWeatherLink);
    $spinner.classList.toggle('spinner-wrapper--active');
    const parsedDaily = await fetchDailyData.json();

    //insert Daily into the DOM
    const dailyWeather = parsedDaily.daily;
    setDailyWeather(dailyWeather, units);

}
