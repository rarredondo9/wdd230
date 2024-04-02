let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const navItems = document.querySelector('nav ul');

    menuButton.textContent = '☰';

    menuButton.addEventListener('click', function () {
        if (navItems.style.display === 'block') {
            navItems.style.display = 'none';
            menuButton.textContent = '☰';
        } else {
            navItems.style.display = 'block';
            menuButton.textContent = '✕';
        }
    });
});
