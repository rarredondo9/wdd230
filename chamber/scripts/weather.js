const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-description");

const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=15.681220930878085&lon=-90.36186222196734&appid=fa4eb8c44d47c655a9c714e866491c57&units=imperial`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=15.681220930878085&lon=-90.36186222196734&appid=fa4eb8c44d47c655a9c714e866491c57&units=imperial`;

async function getCurrentWeather() {
    try {
        const responseCurrent = await fetch(urlCurrent);
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            // console.log(dataCurrent); //testing
            displayCurrentWeather(dataCurrent);
        } else {
            throw Error(await responseCurrent.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getCurrentWeather();

async function getForecastWeather() {
    try {
        const responseForecast = await fetch(urlForecast);
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            // console.log(dataForecast); //testing
            displayForecastWeather(dataForecast);
        } else {
            throw Error(await responseForecast.text());
        }
    } catch (error) {
        console.log(error);
    }
}
getForecastWeather();

function displayCurrentWeather(data) {
    // console.log(data);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
}

function displayForecastWeather(data) {
    // console.log(data);
    const highs = document.querySelector("#forecast-high");
    const lows = document.querySelector("#forecast-low");

    for (let i = 0; i < 3; i++) {
        // console.table(data.daily[i]);
        const dayHigh = document.createElement("li");
        const dayLow = document.createElement("li");

        dayHigh.innerHTML = `${data.list[i].main.temp_max}&deg;F`;
        // console.log(dayHigh);
        dayLow.innerHTML = `${data.list[i].main.temp_min}&deg;F`;
        // console.log(dayLow);

        highs.appendChild(dayHigh);
        lows.appendChild(dayLow);
    }
}
