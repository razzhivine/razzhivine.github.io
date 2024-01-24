document.addEventListener('DOMContentLoaded', function () {
    var brandsPagination = new Swiper(".brands-pagination-slider", {
        slidesPerView: 2.7,
        spaceBetween: 30,
        767: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    });
    var brands = new Swiper(".brands-slider", {
        loop: true,
        pagination: {
            el: '.brands-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="brands__counter counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div></div>';
            }
        },
        navigation: {
            prevEl: ".brands-slider-arrows .arrows__item--prev",
            nextEl: ".brands-slider-arrows .arrows__item--next",
        },
        thumbs: {
            swiper: brandsPagination,
        },
    });

    

    var firstScreenImages = new Swiper(".first-screen-images-slider", {
        slidesPerView: 1,
    });

    

    var list = new Swiper(".list-slider", {
        loop: true,
        slidesPerView: 1.1,
        spaceBetween: 15,
        pagination: {
            el: '.list-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        breakpoints: {
            767: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            1023: {
              slidesPerView: 3.1,
              spaceBetween: 30,
            },
            1379: {
              slidesPerView: 4,
              spaceBetween: 50,
              pagination: false
            },
        },
    });

    var blog = new Swiper(".blog-slider", {
        loop: true,
        slidesPerView: 1.1,
        spaceBetween: 15,
        pagination: {
            el: '.blog-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="counter blog__counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div> </div> <div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".blog-slider-arrows .arrows__item--prev",
            nextEl: ".blog-slider-arrows .arrows__item--next",
        },
        breakpoints: {
            767: {
                slidesPerView: 2.1,
                spaceBetween: 30,
                
            },
            1023: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
        },
    });

    // if (window.matchMedia("(max-width: 1279px)").matches) {
    let firstScreenHeight = document.getElementById('first-screen').clientHeight;
    let firstScreenImagesBlock = document.getElementById('first-screen-images');
    firstScreenImagesBlock.style.height = firstScreenHeight + 'px'
    // }

});
window.addEventListener("resize", (e) => {
    let firstScreenHeight = document.getElementById('first-screen').clientHeight;
    let firstScreenImagesBlock = document.getElementById('first-screen-images');
    firstScreenImagesBlock.style.height = firstScreenHeight + 'px';
});