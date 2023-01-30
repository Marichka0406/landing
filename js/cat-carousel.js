(function () {

    const slides = [
        '<div><img class="cat-carousel-item" src="img/cat-is-laughing.jpg" alt="cat is laughing"></div>',
        '<div><img class="cat-carousel-item" src="img/funny-cat.jpg" alt="cat is burito"> </div> ',
        '<div><img class="cat-carousel-item" src="img/cute-photos-of-cats-cleaning.jpg" alt="cat is cleaning itself">  </div>',
        '<div><img class="cat-carousel-item" src="img/cat-is-petted.jpg" alt="cat is petted"> </div>'
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }



    renderSlides();

    const btnNext = document.querySelector('.btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.addEventListener('click', () => {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderSlides();
    });

    window.addEventListener('resize', renderSlides);

})();
