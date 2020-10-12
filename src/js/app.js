import { get } from 'core-js/fn/dict';
import './../scss/main.scss';
import {initializeSearch, getUserInput} from './modules/search.js';
import { getWeatherData } from './modules/search';

initializeSearch();
getUserInput();
getWeatherData('Kiev');
