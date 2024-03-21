function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}
document.addEventListener('DOMContentLoaded', function () {
   

    var firstScreenImages = new Swiper(".first-screen-images-slider", {
        loop: true,
        slidesPerView: 1,
        effect: "fade"
    });
    var firstScreen = new Swiper(".first-screen-slider", {
        init: false,
        slidesPerView: 1,
        spaceBetween: 20,

        pagination: {
            el: '.first-screen-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="counter counter--white first-screen__counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div> </div> <div class="progress progress--white"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".first-screen-slider-arrows .arrows__item--prev",
            nextEl: ".first-screen-slider-arrows .arrows__item--next",
        },
        thumbs: {
            swiper: firstScreenImages,
        },
    });

    if (window.matchMedia("(max-width: 1279px)").matches) {
        firstScreen.on('slideChange', function (swiper) {
            let advantagesHeight = swiper.el.querySelector('.swiper-slide-next .first-screen__advantages').clientHeight;
            let controls = document.querySelector('.first-screen-controls');
            controls.style.bottom = (advantagesHeight + 50) + 'px';
        });
        firstScreen.on('init', function (swiper) {
            let advantagesHeight = swiper.el.querySelector('.swiper-slide-next .first-screen__advantages').clientHeight;
            let controls = document.querySelector('.first-screen-controls');
            controls.style.bottom = (advantagesHeight + 50) + 'px';
        });
    }
    firstScreen.init();
    
    var brandsPagination = new Swiper(".brands-pagination-slider", {
        slidesPerView: 2.7,
        spaceBetween: 30,
        breakpoints: {
            767: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
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

    var circularSlider = new Swiper(".circular-slider", {
        slidesPerView: 1,
        allowTouchMove: false,
        loop: true,
        pagination: {
            el: '.circular-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="counter circular-block__counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div></div>';
            }
        },
        navigation: {
            prevEl: ".circular-slider-arrows .arrows__item--prev",
            nextEl: ".circular-slider-arrows .arrows__item--next",
        },
    });

    if(document.getElementById('holder') !== null){

        gsap.registerPlugin(MotionPathPlugin);
        const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
        circlePath.id = "circlePath";
        document.querySelector("svg").prepend(circlePath);
        const items = document.querySelectorAll('.circular-block__circle-item');

        let step = 1 / 4;
        let wrapProgress = gsap.utils.wrap(0, 1);
        let snap = gsap.utils.snap(step)

        gsap.set(items, { 
            motionPath: {
                path: circlePath,
                align: circlePath,
                alignOrigin: [0.5, 0.5],
                end: i => i / items.length 
            }
        });

        const tl = gsap.timeline({ paused:true });
        tl.to('.circular-block__circle-inner', {
            rotation: '-=360', 
            transformOrigin: 'center', 
            duration: 1, 
            ease: 'none'
        });

        tl.to(items, {
            rotation: "360", 
            transformOrigin: 'center', 
            duration: 1, 
            ease: 'none'
        }, 0);
        
        document.getElementById('next').addEventListener("click", function() {
            gsap.to(tl, {
                progress: snap(tl.progress() + step),
                modifiers: {
                progress: wrapProgress
                }
            });
        });
        
        document.getElementById('prev').addEventListener("click", function() {
            gsap.to(tl, {
                progress: snap(tl.progress() - step),
                modifiers: {
                progress: wrapProgress
                }
            });
        });
    }


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

    var info = new Swiper(".project-info-slider", {
        loop: true,
        // effect: "fade",
        slidesPerView: 1,
        pagination: {
            el: '.info-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="counter info__counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div> </div> <div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".info-slider-arrows .arrows__item--prev",
            nextEl: ".info-slider-arrows .arrows__item--next",
        },
    });

    var steps = new Swiper(".project-steps-slider", {
        loop: true,
        // effect: "fade",
        slidesPerView: 1.8,
        spaceBetween: 20,
        pagination: {
            el: '.steps-slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="counter steps__counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div> </div> <div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".steps-slider-arrows .arrows__item--prev",
            nextEl: ".steps-slider-arrows .arrows__item--next",
        },
    });

    let tabsItems = document.querySelectorAll('.tabs-item');
    tabsItems.forEach(element => {
        element.addEventListener('click', ()=>{
            tabsItems.forEach(tab => {
                if(element != tab){
                    tab.classList.remove('active');
                }
            });
            element.classList.toggle('active');
        })
    });
    
    let scrollToTop = document.querySelector('.js-scroll-to-top');
    scrollToTop.addEventListener('click', ()=>{
        scrollTo(0, 700)
    })

    if(document.getElementById('first-screen') !== null){
        let firstScreenHeight = document.getElementById('first-screen').clientHeight;
        let firstScreenImagesBlock = document.getElementById('first-screen-images');
        firstScreenImagesBlock.style.height = firstScreenHeight + 'px'
    }

});
window.addEventListener("resize", (e) => {
    if(document.getElementById('first-screen') !== null){
        let firstScreenHeight = document.getElementById('first-screen').clientHeight;
        let firstScreenImagesBlock = document.getElementById('first-screen-images');
        firstScreenImagesBlock.style.height = firstScreenHeight + 'px';
    }

});

