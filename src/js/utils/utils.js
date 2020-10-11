import cloudy from "./../../images/cloudy.png";//
import rainy from "./../../images/rainy.png";// + drizzle
import sunny from "./../../images/sunny.png";//clear sky
import stormy from "./../../images/stormy.png";//
import windy from "./../../images/windy.png";
import foggy from "./../../images/haze.png";
// import snowy from "./../../images/snow.png";


// export const fahToKel = temp => {
//   return (temp + 459.67) * (5 / 9);
// };

// export const kelToCelcius = temp => {
//   return temp - 273.15;
// };

// export const kelToFahrenheit = temp => {
//   return temp * (9 / 5) - 459.67;
// };

// export const toCelFah = (temp, unit) => {
//   if (unit === "us") {
//     return Math.round(kelToFahrenheit(temp));
//   }
//   return Math.round(kelToCelcius(temp));
// };

export const getIcon = description => {
  switch (description) {
    case "thunderstorm":
    case "tornado":
        return stormy;

    case "rain":
    case "drizzle":
        return rainy;

    case "clear":
      return sunny;

    case "snow":
      return rainy;

    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
      return foggy;

    case "clouds":
      return cloudy;

    default:
      return sunny;
  }
};

export const getAnimatedIcon = description => {
  switch (description) {
    case "clear":
      return `
        <div class="icon sunny">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      `;

    case "rain":
    case "drizzle":
      return `
        <div class="icon rainy">
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      `;

    case "snow":
      return `
        <div class="icon flurries">
          <div class="cloud"></div>
          <div class="snow">
            <div class="flake"></div>
            <div class="flake"></div>
          </div>
        </div>
      `;

    case "wind":
    case "cloudy":
      return `
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      `;

    case "thunderstorm":
    case "tornado":
      return `
        <div class="icon thunder-storm">
          <div class="cloud"></div>
          <div class="lightning">
            <div class="bolt"></div>
            <div class="bolt"></div>
          </div>
        </div>
      `;
    default:
      return `
        <div class="icon sunny">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      `;
  }
};
