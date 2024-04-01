document.addEventListener('DOMContentLoaded', function () {
    function closeBanner() {
        const banner = document.querySelector('.banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }

    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', closeBanner);
    }
});
