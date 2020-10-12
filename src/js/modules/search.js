import { firebrick } from "color-name";
import { setCurrentWeather } from "./current";

//cache the dom
const $spinner = document.querySelector('.spinner-wrapper');
const $searchInput = document.querySelector('.search__input');
const $searchTrigger = document.querySelector('.search__trigger');

//variables
const weatherAPIKey = '49b4a812166d6a8b0893fc1bb58dac83';
const weatherEndPoint = 'https://api.openweathermap.org';
let weatherUnits = 'metric'; //imperial for Fahrenheit
let cityName = 'Kiev';
let countryName = 'UA';



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
            getWeatherData(cityName);
            $searchInput.value = '';
        }
    })
}


const getWeatherData = async city => {
    //CURRENT

    const currentWeatherLink = `${weatherEndPoint}/data/2.5/weather?q=${city}&units=${weatherUnits}&appid=${weatherAPIKey}`;
    const fetchCurrentData = await fetch(currentWeatherLink);
    const parsedCurrent = await fetchCurrentData.json();
    console.log(parsedCurrent);

    //insert into DOM
    const currentWeather = parsedCurrent;
    setCurrentWeather(currentWeather, weatherUnits);

    //get lat and long
    let lat = parsedCurrent.coord.lat;
    let lon = parsedCurrent.coord.lon;

    //DAILY

    const dailyWeatherLink = await `${weatherEndPoint}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${weatherUnits}&exclude=current,minutely,hourly,alerts&appid=${weatherAPIKey}`;
    const fetchDailyData = await fetch(dailyWeatherLink);
    const parsedDaily = await fetchDailyData.json();
    console.log(parsedDaily);

    //insertDaily into the DOM
    //...

}
