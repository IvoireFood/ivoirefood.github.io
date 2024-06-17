let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
showSlide(slideIndex);

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function showSlide(n) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${n * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active');
}

