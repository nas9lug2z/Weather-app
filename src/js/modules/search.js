import { setCurrentWeather } from './current'
import { setMultiWeather } from './multi'
import { fahToKel } from '../utils/utils';


let address = "Chicago, IL";

// cache the DOM
const $searchForm = document.querySelector(".search__form");
const $searchInput = document.querySelector(".search__input");
const $searchCity = document.querySelector(".search__city");
const $spinnerWrapper = document.querySelector(".spinner-wrapper");
const GEOCODE_KEY = "AIzaSyCe2iXCLvj2Hhn1y6lxZXacImb7SRC2wm8";
const DARK_SKY_KEY = "708dad8a98ef74ca7e89b22bcfd30392";
const CORS = "https://cors-anywhere.herokuapp.com";

export const initializeSearch = _ => {
  console.log("hi this is search module speaking");
  bindSearchEvents();
  updateWeather(address);
};

const bindSearchEvents = () => {
  $searchForm.addEventListener("submit", e => {
    e.preventDefault();
    $searchInput.classList.toggle("search__input--open");
    $searchInput.focus();
    if ($searchInput.value === "") return;
    address = $searchInput.value;
    $searchInput.value = "";
    updateWeather(address);
    render();
  });
};

const updateWeather = async query => {
  const { lat, lng } = await getLatLng(address);
  const weatherData = await getWeatherData(lat, lng);

  const weatherCurrent = weatherData.currently;
  weatherCurrent.temperature = fahToKel(weatherCurrent.temperature);
  setCurrentWeather(weatherCurrent);

  const weatherMulti = weatherData.daily.data.map(elem => {
    elem.temperatureHigh = fahToKel(elem.temperatureHigh)
    elem.temperatureLow = fahToKel(elem.temperatureLow)
    return elem;
  });

  weatherMulti[0].temperature = weatherCurrent.temperature;
  weatherMulti[0].summary = weatherCurrent.summary;

  setMultiWeather(weatherMulti)
};

const getWeatherData = async (lat, lng) => {
  const reqLink = `${CORS}/https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${lng}`;
  const fetchData = await fetch(reqLink);
  const parsed = await fetchData.json();

  return parsed;
};

const getLatLng = async query => {
  const reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_KEY}`;
  const fetchData = await fetch(reqLink);
  const parsed = await fetchData.json();
  const latLng = {
    lat: parsed.results[0].geometry.location.lat,
    lng: parsed.results[0].geometry.location.lng
  };

  return latLng;
};

const render = _ => {
  $searchCity.innerHTML = address;
};
