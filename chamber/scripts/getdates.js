let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menu-button');
    var menuItems = document.querySelector('nav ul');

    menuButton.addEventListener('click', function () {
        var isMenuOpen = menuItems.style.display === 'block';
        menuItems.style.display = isMenuOpen ? 'none' : 'block';
        menuButton.classList.toggle('close', !isMenuOpen);
    });
});