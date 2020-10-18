// import './../scss/main.scss';
import {initializeSearch, getUserInput} from './modules/search.js';
import { getWeatherData } from './modules/search.js';
import { initToggle } from './modules/units_toggle.js';

initializeSearch();
getUserInput();
getWeatherData('Kiev');
initToggle();