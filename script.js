document.addEventListener('DOMContentLoaded', () => {
    // Ensure video plays
    const video = document.querySelector('video');
    if (video) {
        video.play().catch(error => {
            console.log('Autoplay prevented:', error);
            // Optional: Add a UI element to let user start video if needed
        });
    }
});
