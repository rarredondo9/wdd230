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
