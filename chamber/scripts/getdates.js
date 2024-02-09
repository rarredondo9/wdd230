//get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;
//get last modified  date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;
//hamburguer menu
document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menu-button');
    var menuItems = document.querySelector('nav ul');

    menuButton.addEventListener('click', function () {
        var isMenuOpen = menuItems.style.display === 'block';
        menuItems.style.display = isMenuOpen ? 'none' : 'block';
        menuButton.classList.toggle('close', !isMenuOpen);
    });
});
//dark mode
const modeButton = document.querySelector("#mode");
const mainArea = document.querySelector("main");
modeButton.addEventListener("click", () => {
    modeButton.classList.toggle("dark");
    mainArea.classList.toggle("dark");
});