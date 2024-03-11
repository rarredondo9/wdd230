let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuItems = document.querySelectorAll('.menu-item');

    menuButton.addEventListener('click', function () {
        menuItems.forEach(item => {
            item.classList.toggle('open');
        });
        menuButton.classList.toggle('close');
    });
});

//page visits
const displayVisits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    displayVisits.textContent = numVisits;
} else {
    displayVisits.textContent = "This is your first visit!";
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);


//weather
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weather-description");

const urlWeather = "//api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=fa4eb8c44d47c655a9c714e866491c57&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //testing
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}