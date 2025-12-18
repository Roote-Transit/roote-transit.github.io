document.addEventListener('DOMContentLoaded', () => {
    // Track time on page for scraper detection
    const startTime = Date.now();
    const form = document.querySelector('form');
    const secondsInput = document.getElementById('seconds_on_page');

    if (form && secondsInput) {
        form.addEventListener('submit', () => {
            const secondsQuery = Math.floor((Date.now() - startTime) / 1000);
            secondsInput.value = secondsQuery;
        });
    }

    // Ensure video plays
    const video = document.querySelector('video');
    if (video) {
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
            // Optional: Add a UI element to let user start video if needed
        });
    }
});
