document.addEventListener("DOMContentLoaded", function(){
    let slideResetTransition$ = new Swiper(".slider", {
        // freeMode: true,
        // mousewheel: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
            nextEl: ".slider__next",
            prevEl: ".slider__prev",
        },
        scrollbar: {
            el: ".slider__scrollbar",
            // hide: true,
        },
    });

    let partners = new Swiper(".partners__slider", {
        // freeMode: true,
        // mousewheel: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        navigation: {
            nextEl: ".partners__next",
            prevEl: ".partners__prev",
        },
        scrollbar: {
            el: ".partners__scrollbar",
            // hide: true,
        },
    });
});
    