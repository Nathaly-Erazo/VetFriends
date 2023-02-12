// FUNCIÓN CAROUSEL
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function updateIndicators () {
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
};

function updateSlides  ()  {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (index === currentSlide) {
            slide.style.display = 'block';
        }
    });
};

function prevSlide  ()  {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    updateIndicators();
    updateSlides();
};

function nextSlide(){
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    updateIndicators();
    updateSlides();
};

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

updateIndicators();
updateSlides();

// FUNCIÓN OVERLAY
function mostrarTexto(){ 
    let texto = document.querySelectorAll(".overlay");
    texto.forEach (function(item){
        item.className = 'overlay-hovered';
    })
}

function ocultarTexto(){
    let texto = document.querySelectorAll('.overlay-hovered');
    texto.forEach (function(item){
        item.className = 'overlay';
    })
}

// FUNCIÓN MANTENER PULSADO
function cambiarPagina(){
    document.getElementById('enlace').style.color = "#af9eab";
}
function volverPagina(){
    document.getElementById('enlace').style.color = "#9eafa2";
    window.location.href = 'contacto.html#contacto';
}