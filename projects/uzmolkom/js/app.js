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
        // loop: true,
        // effect: "fade",
        // slidesPerView: 1.8,
        slidesPerView: 1.25,
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
        breakpoints: {
            // 767: {
            //   slidesPerView: 2.1,
            //   spaceBetween: 20,
            // },
            // 1023: {
            //   slidesPerView: 3.1,
            //   spaceBetween: 30,
            // },
            1379: {
              slidesPerView: 1.8,
              spaceBetween: 50,
              pagination: false
            },
        },
    });

    var historyPagination = new Swiper(".history-slider-pagination", {
        slidesPerView: 'auto',
        direction: "vertical",
        spaceBetween: 20,
    });
    var historySlider = new Swiper(".history-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
            prevEl: ".history-slider-arrows .arrows__item--prev",
            nextEl: ".history-slider-arrows .arrows__item--next",
        },
        loop: true,
        thumbs: {
            swiper: historyPagination,
        },
    });

    var teamPagination = new Swiper(".team-slider-pagination", {
        slidesPerView: 'auto',
        direction: "vertical",
        spaceBetween: 20,
    });
    var teamSlider = new Swiper(".team-main-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        navigation: {
            prevEl: ".team-slider-arrows .arrows__item--prev",
            nextEl: ".team-slider-arrows .arrows__item--next",
        },
        loop: true,
        thumbs: {
            swiper: teamPagination,
        },
    });


    var bannersSlider = new Swiper(".banners-main-slider", {
        slidesPerView: 1.25,
        spaceBetween: 6,
        pagination: {
            el: '.banners-main-slider-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".banners-slider-arrows .arrows__item--prev",
            nextEl: ".banners-slider-arrows .arrows__item--next",
        },
        loop: true,
        breakpoints: {
            499: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1023: {
                slidesPerView: 4,
            },
        },
    });

    var ourTeamSlider = new Swiper(".our-team-main-slider", {
        slidesPerView: 1.25,
        spaceBetween: 20,
        navigation: {
            prevEl: ".our-team-slider-arrows .arrows__item--prev",
            nextEl: ".our-team-slider-arrows .arrows__item--next",
        },
        loop: true,
        breakpoints: {
            499: {
                slidesPerView: 2.25,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1023: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });

    var bannersSlider1 = new Swiper(".banners-main-slider1", {
        slidesPerView: 1.25,
        spaceBetween: 6,
        pagination: {
            el: '.banners-main-slider-pagination1',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".banners-slider-arrows1 .arrows__item--prev",
            nextEl: ".banners-slider-arrows1 .arrows__item--next",
        },
        loop: true,
        breakpoints: {
            499: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1023: {
                slidesPerView: 4,
            },
        },
    });

    var productsPagination = new Swiper(".products-slider-pagination", {
        cssMode: true,
        slidesPerView: 'auto',
    });

    var productsSlider = new Swiper(".products-main-slider", {
        slidesPerView: 1,
        thumbs: {
            swiper: productsPagination,
        },
    });

    var slider = new Swiper(".slider-1", {
        slidesPerView: 1,
        pagination: {
            el: '.slider-swiper-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                return '<div class="counter slider__counter"><div class="counter__current">'+String(current).padStart(2,'0')+ '</div>' + '/' + '<div class="counter__total">' + String(total).padStart(2,'0') + '</div> </div> <div class="progress"><div class="progress__line" style="width:'+ (current/total*100) +'%"></div></div>';
            }
        },
        navigation: {
            prevEl: ".slider-arrows .arrows__item--prev",
            nextEl: ".slider-arrows .arrows__item--next",
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

    let tabsSecondItems = document.querySelectorAll('.tabs-second__item');
    tabsSecondItems.forEach(element => {
        element.addEventListener('click', ()=>{
            tabsSecondItems.forEach(tab => {
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
    if(document.querySelectorAll('.js-tab').length){
        let tabs = document.querySelectorAll('.js-tab');
        let blocks = document.querySelectorAll('.js-blocks');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tab.parentElement.querySelectorAll('.js-tab').forEach(tab1 => {
                    tab1.classList.remove('-active')
                })
                tab.parentElement.parentElement.querySelectorAll('.js-block').forEach(block => {
                    block.classList.remove('-active')
                })
                let block = document.querySelector('.js-block[data-id="'+ tab.dataset.id +'"]');
                block.classList.add('-active');
                tab.classList.add('-active');

            })
        });
    }

    if(document.getElementById('js-price-controller') !== null){
        priceController = document.getElementById('js-price-controller');
        priceController.addEventListener('click', () => {
            priceController.classList.toggle('-active');
            document.getElementById('js-price-switch').classList.toggle('-active');
        })
        priceSwitcher = document.querySelectorAll('.js-price-switcher');
        priceSwitcher.forEach(element => {
            element.addEventListener('click', () => {
                document.getElementById('js-price-switch').classList.toggle('-active');
                priceController.classList.toggle('-active');
                priceSwitcher.forEach(elem => {
                    elem.classList.remove('-active');
                });
                element.classList.add('-active');
                priceController.innerText = element.dataset.text;
                document.getElementById('js-price').innerText = element.dataset.price;
            });
        });
    }

    if(document.querySelectorAll('.js-filter').length){
        let filterOpenBtn = document.querySelectorAll('.js-filter-open')
        let filterCloseBtn = document.querySelectorAll('.js-filter-close')

        filterOpenBtn.forEach(element => {
            element.addEventListener('click', ()=>{
                let filter = document.querySelector('.js-filter[data-id="'+ element.dataset.id +'"]');
                filter.classList.add('-active');
            })
        });

        filterCloseBtn.forEach(element => {
            element.addEventListener('click', ()=>{
                let filter = element.closest('.js-filter');
                filter.classList.remove('-active');
            })
        });
    }
    
    if(document.querySelectorAll('.js-menu').length){
        let menuItems = document.querySelectorAll('.js-menu');
        let subMenus = document.querySelectorAll('.js-sub-menu');
        let overlay = document.querySelector('.js-menu-overlay');
        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', ()=>{
                subMenus.forEach(subMenu => {
                    subMenu.classList.remove('-active');
                });
                let curMenu = menuItem.nextElementSibling;
                let rect = menuItem.getBoundingClientRect();
                let xPosition = rect.left;
                let wrapper = document.querySelector('.wrapper');
                let wrapperRect = wrapper.getBoundingClientRect();
                let center = wrapperRect.width / 2;

                if(xPosition <= center){
                    curMenu.style.left = 0
                    curMenu.style.right = 'inherit'
                    w = wrapperRect.width - 20 - rect.left
                }else{
                    curMenu.style.left = 'inherit'
                    curMenu.style.right = 0
                    w = wrapperRect.width - 20 - (wrapperRect.width - rect.right)
                }
                if(wrapperRect.width - 40 >= w){
                    curMenu.style.width = w + 'px'
                }else{
                    if(xPosition <= center){
                        curMenu.style.width = wrapperRect.width - 20 - rect.left + 'px'; 
                    }else{
                        curMenu.style.width = wrapperRect.width - 20 - (wrapperRect.width - rect.right) + 'px'; 
                    }
                }
                curMenu.classList.add('-active');
                overlay.classList.add('-active')
            })
        });
        overlay.addEventListener('click', ()=>{
            subMenus.forEach(subMenu => {
                overlay.classList.remove('-active');
                subMenu.classList.remove('-active');
            });
        });
        
    }
    if(document.querySelectorAll('.js-menu-tab').length){
        let menuTabs = document.querySelectorAll('.js-menu-tab');
        let menuBlocks = document.querySelectorAll('.js-menu-block');
        menuTabs.forEach(menuTab => {
            menuTab.addEventListener('click', ()=>{
                let id = menuTab.dataset.id;
                menuBlocks.forEach(menuBlock => {
                    menuBlock.classList.remove('-active')
                });
                menuTabs.forEach(menuTab1 => {
                    menuTab1.classList.remove('-active')
                });
                menuTab.classList.add('-active')
                document.querySelector('.js-menu-block[data-id="'+id+'"]').classList.add('-active')
            })
        });
    }

    if(document.querySelectorAll('.js-popup').length){
        let popups = document.querySelectorAll('.js-popup');
        popups.forEach(popup => {
            popup.addEventListener('click', ()=>{
                let id = popup.dataset.id;
                document.querySelector('.popup[data-id="'+ id +'"]').classList.add('-active')
                document.querySelector('.overlay').classList.add('-active')
            })
        });
    }

    if(document.querySelectorAll('.js-popup-close').length){
        let popupCloseButtons = document.querySelectorAll('.js-popup-close');
        popupCloseButtons.forEach(closeButton => {
            closeButton.addEventListener('click', ()=>{
                let id = closeButton.dataset.id;
                document.querySelector('.popup[data-id="'+ id +'"]').classList.remove('-active')
                document.querySelector('.overlay').classList.remove('-active')
            })
        });
    }
    if(document.querySelector('.overlay') !== null){
        let overlay = document.querySelector('.overlay');
        overlay.addEventListener('click', ()=>{
            document.querySelectorAll('.popup').forEach(element => {
                element.classList.remove('-active');
            });
            document.querySelector('.overlay').classList.remove('-active')
        })
    }

});
window.addEventListener("resize", (e) => {
    if(document.getElementById('first-screen') !== null){
        let firstScreenHeight = document.getElementById('first-screen').clientHeight;
        let firstScreenImagesBlock = document.getElementById('first-screen-images');
        firstScreenImagesBlock.style.height = firstScreenHeight + 'px';
    }

});

