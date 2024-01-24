let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");

menuButton.addEventListener("click", () => {
    menuItems.forEach((item) => item.classList.toggle("show"));
    menuButton.classList.toggle("close");
    menu.classList.toggle("show");
});