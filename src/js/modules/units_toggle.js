import { getWeatherData } from './search';
import { passUnits } from './search';

const celcius = document.querySelector('.units__celcius');
const fahrenheit = document.querySelector('.units__fahrenheit');
let cityName = 'Kiev';


export const passCityName = city => {
    cityName = city;
}

const toggleUnits = (elem, units) => {
    elem.addEventListener('click', _ => {
        if (!elem.matches(`.units__${units === 'metric' ? 'celcius' : 'fahrenheit'}--active`)) {
            celcius.classList.toggle('units__celcius--active');
            fahrenheit.classList.toggle('units__fahrenheit--active');
            getWeatherData(cityName, units);
            passUnits(units);
        }
    })
}

export const initToggle = _ => {
    toggleUnits(fahrenheit, 'imperial');
    toggleUnits(celcius, 'metric');
}