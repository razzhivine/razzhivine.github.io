document.addEventListener("DOMContentLoaded", function(){
    let slider = new Swiper(".slider", {
        // freeMode: true,
        // mousewheel: true,
        slidesPerView: "auto",
        spaceBetween: 12,
        navigation: {
            enabled: false,
            nextEl: ".slider__next",
            prevEl: ".slider__prev",
        },
        scrollbar: {
            enabled: false,
            el: ".slider__scrollbar",
        },
        breakpoints: {
            1023: {
                navigation: {
                    enabled: true,
                },
                scrollbar: {
                    enabled: true,
                }
            },
            767: {
                spaceBetween: 24,
            }
        },
    });

    let partners = new Swiper(".partners__slider", {
        slidesPerView: "auto",
        spaceBetween: 24,
        navigation: {
            enabled: false,
            nextEl: ".partners__next",
            prevEl: ".partners__prev",
        },
        scrollbar: {
            enabled: false,
            el: ".partners__scrollbar",
        },
        breakpoints: {
            1023: {
                navigation: {
                    enabled: true,
                },
                scrollbar: {
                    enabled: true,
                }
            },
        },
     
    });
    let news = new Swiper(".news__list", {
        slidesPerView: "auto",
        spaceBetween: 24,
        breakpoints: {
            1023: {
                slidesPerView: 3,
        
            },
        },
    });

    if(window.matchMedia("(max-width: 767px)").matches){
        sliderButtons = document.querySelectorAll(".slider__item-content .btn");
        sliderButtons.forEach(element => {
            // console.log(element)
            element.classList.remove("btn_big")
            element.classList.add("btn_link")
        });
    }

    customSelect('.custom-select');

});
    