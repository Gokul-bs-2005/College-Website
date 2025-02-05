// Image Carousel: Automatically switch images every 5 seconds
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage() {
    // Hide all images
    images.forEach(img => img.style.display = 'none');

    // Show the next image
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].style.display = 'block';
}

// Initially show the first image
images.forEach(img => img.style.display = 'none');
images[currentImageIndex].style.display = 'block';

// Start the carousel (every 5 seconds)
setInterval(changeImage, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Video Play/Pause functionality
const video = document.getElementById('campusVideo');
const toggleButton = document.getElementById('toggleVideo');

toggleButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggleButton.textContent = 'Pause Video';
    } else {
        video.pause();
        toggleButton.textContent = 'Play Video';
    }
});
