import { get } from 'core-js/fn/dict';
import './../scss/main.scss';
import {initializeSearch, getUserInput} from './modules/search.js';
import { getWeatherData } from './modules/search';
import { initToggle } from './modules/units_toggle';

initializeSearch();
getUserInput();
getWeatherData('Kiev');
initToggle();
