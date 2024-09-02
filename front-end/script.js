document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const video = document.querySelector(".background-clip");

    // Ensure video is muted to comply with autoplay policies
    video.muted = true;

    video.oncanplaythrough = () => {
        preloader.style.display = 'none';
        video.play(); // Manually trigger video play
    };

    // Fallback: if video doesn't start automatically, manually trigger play after preload
    setTimeout(() => {
        if (video.paused) {
            video.play();
        }
    }, 500);
});

