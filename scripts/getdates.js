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
