function closeTempMaxMessage() {
    document.getElementById('tempMaxMessage').style.display = 'none';
}

const temperatureElement = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const tempMaxMessageElement = document.querySelector("#tempMaxText");
const tomorrowForecastElement = document.querySelector("#tomorrow-forecast");

const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=15.681220930878085&lon=-90.36186222196734&appid=fa4eb8c44d47c655a9c714e866491c57&units=imperial`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=15.681220930878085&lon=-90.36186222196734&appid=fa4eb8c44d47c655a9c714e866491c57&units=imperial`;

async function getCurrentWeather() {
    try {
        const response = await fetch(urlCurrent);
        if (!response.ok) throw new Error("Weather data loading failed.");
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error("Error fetching current weather:", error);
    }
}

async function getForecastWeather() {
    try {
        const response = await fetch(urlForecast);
        if (!response.ok) throw new Error("Forecast data loading failed.");
        const data = await response.json();
        displayForecastWeather(data);
    } catch (error) {
        console.error("Error fetching forecast weather:", error);
    }
}

function displayCurrentWeather(data) {
    temperatureElement.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = data.weather[0].description;
    weatherDescription.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    tempMaxMessageElement.textContent = `High Temp: ${data.main.temp_max.toFixed(0)}°F`;
}

function displayForecastWeather(data) {
    // Find the forecast for tomorrow at 15:00
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateString = tomorrow.toISOString().split('T')[0];
    const tomorrowForecast = data.list.find(forecast => forecast.dt_txt.startsWith(tomorrowDateString) && forecast.dt_txt.endsWith("15:00:00"));

    if (tomorrowForecast) {
        const tempForecast = `${tomorrowForecast.main.temp.toFixed(0)}°F`;
        const iconUrl = `https://openweathermap.org/img/w/${tomorrowForecast.weather[0].icon}.png`;
        tomorrowForecastElement.innerHTML = `
            <img src="${iconUrl}" alt="${tomorrowForecast.weather[0].description}" style="vertical-align: middle;">
            <span>${tempForecast}</span> - <span>${tomorrowForecast.weather[0].description}</span>
        `;
    }
}

getCurrentWeather();
getForecastWeather();
