import { identifier } from 'babel-types';
import { getIcon} from './../utils/utils';
import { getWeatherData } from './search';
import { amplifyForecast } from './current'

const $list = document.querySelector('.wlist');

const getWeekday = dayNum => {
    return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][dayNum];
}

export const setDailyWeather = (weatherData, units) => {
    let weather = weatherData;

    //clear up old info
    $list.innerHTML = '';

    //render the dom
    for(let i = 0; i < 5; i++) {
        //convert the date
        let date = new Date(weather[i].dt*1000);

        $list.innerHTML += `<div class="wlist__item">
        <img class="wlist__icon" src="/src/${getIcon(weather[i].weather[0].main.toLowerCase())}">
        <div class="wlist__range">
        ${Math.round(weather[i].temp.max)}&#176/${Math.round(weather[i].temp.night)}&#176
        </div>
        <div class="wlist__day">
        ${getWeekday(date.getDay())} ${date.getDate()}/${date.getMonth()}
        </div>
        </div>`
    }

    //add event listeners
    $list.addEventListener('click', e => {
        let elem = e.target;
        while (elem && !elem.matches(".wlist__item")) {
            elem = e.target.parentElement;
        }
        const selectedID = [...elem.parentElement.children].indexOf(elem);
        amplifyForecast(weather[selectedID], units);
    })
}



