document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const video = document.querySelector(".background-clip");
    const menuButton = document.querySelector(".menu-button");
    const sideMenu = document.querySelector(".side-menu");
    const container = document.querySelector(".container");

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

    // Toggle menu and push content
    menuButton.addEventListener("click", () => {
        console.log("Menu button clicked"); // Debugging log
        sideMenu.classList.toggle("open");
        container.classList.toggle("menu-open");

        // Toggle the menu button icon
        menuButton.classList.toggle("open");
    });
});
