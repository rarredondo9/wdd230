document.addEventListener('DOMContentLoaded', (event) => {
    const banner = document.querySelector("#banner");
    const closeButton = document.querySelector(".close-button");

    function closeBanner() {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', closeBanner);

    const today = new Date();

    if (today.getDay() >= 1 && today.getDay() <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
});


