    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active-slide'));
        slides[index].classList.add('active-slide');
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
