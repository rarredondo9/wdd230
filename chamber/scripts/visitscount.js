document.addEventListener('DOMContentLoaded', function () {
    // set the visit date
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date();
    let message = "Welcome! Let us know if you have any questions.";

    if (lastVisit) {
        const lastVisitDate = new Date(parseInt(lastVisit));
        const timeDiff = now - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } else {
            const dayWord = daysDiff === 1 ? "day" : "days";
            message = `You last visited ${daysDiff} ${dayWord} ago.`;
        }
    }

    // updates message
    document.querySelector('.visits').textContent = message;

    //updates las visit
    localStorage.setItem('lastVisit', now.getTime().toString());

    // LAZY LOADING
    const images = document.querySelectorAll('img[loading="lazy"]');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0
    };

    let observer = new IntersectionObserver(function (entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });
});

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if (!src) return;
    img.src = src;
}

