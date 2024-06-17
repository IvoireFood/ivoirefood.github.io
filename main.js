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

    function button() {
    var liens = document.querySelectorAll('.liens');
    var button = document.getElementById('toggleButton');
    var divgauche = document.getElementById('maingauche');

    // Check the current state of the first link to determine whether to hide or show
    if (liens[0].style.display === 'none') {
        // Show the links
        liens.forEach(function(lien) {
            lien.style.display = 'inline';
        });
        divgauche.style.display = 'none';
        button.textContent = 'Cacher les liens';
    } else {
        // Hide the links
        liens.forEach(function(lien) {
            lien.style.display = 'none';
        });
        divgauche.style.display = 'inline';
        button.textContent = 'Afficher les liens';
    }
    };
