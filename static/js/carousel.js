const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
let intervalTime = 5000; 
let autoSlide;

function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, intervalTime);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

startAutoSlide();
