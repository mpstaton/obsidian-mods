document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - slideIndex) * 100}%)`;
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        updateSlides();
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initialize the slides
    updateSlides();
});
