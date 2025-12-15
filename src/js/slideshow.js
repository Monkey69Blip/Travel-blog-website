// This file contains the JavaScript code specifically for the image slideshow feature, managing the display of images, transitions, and user interactions.

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = 'block';  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

prevButton.addEventListener('click', () => {
    slideIndex -= 2; // Go back one slide
    showSlides();
});

nextButton.addEventListener('click', showSlides);

showSlides();