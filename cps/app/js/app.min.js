document.addEventListener('DOMContentLoaded', function(e) {
  
    const bannerPaginationSlider = new Swiper('.banner__slider-pagination', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            413: {
                slidesPerView:2,
            },
            767: {
                spaceBetween: 50,
                slidesPerView:3,
            },
          },
    });

    const bannerSlider = new Swiper('.banner__slider-inner', {
        autoHeight: true,
        navigation: {
            nextEl: ".banner__slider-pagination-arrow_next",
            prevEl: ".banner__slider-pagination-arrow_prev",
        },
        thumbs: {
            swiper: bannerPaginationSlider,
        },
       
    });

    const bannerCompanyPaginationSlider = new Swiper('.banner-company__slider-pagination', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            413: {
                slidesPerView:2,
            },
            767: {
                spaceBetween: 60,
                slidesPerView:3,
            },
          },
    });

    const bannerCompanySlider = new Swiper('.banner-company__slider-inner', {
        autoHeight: true,
        navigation: {
            nextEl: ".banner-company__slider-pagination-arrow_next",
            prevEl: ".banner-company__slider-pagination-arrow_prev",
        },
        thumbs: {
            swiper: bannerCompanyPaginationSlider,
        },
    });
       

    const advantagesSlider = new Swiper('.advantages-slider__inner', {
        freeMode: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        mousewheel: true,
        767: {
            spaceBetween: 30,
        },
    });

    const productsPaginationSlider = new Swiper('.products__pagination-slider-inner', {
        direction: "vertical",
        slidesPerView: "auto",
    });

    const productsSlider = new Swiper('.products__slider-inner', {
        slidesPerView: 1,
        thumbs: {
            swiper: productsPaginationSlider,
        },
        pagination: {
            el: ".products__pagination-slider-swiper-pagination",
            // type: "custom"
            clickable: true
        },
    });

    const gallerySlider = new Swiper('.why-we__gallery-inner', {
        freeMode: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        mousewheel: true,
        767: {
            spaceBetween: 30,
        },
    });

    const catalogDetailPaginationSlider = new Swiper('.catalog-detail__slider-pagination-inner', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            413: {
                slidesPerView:2,
            },
            767: {
                spaceBetween: 50,
                slidesPerView:3,
            },
        },
    });

    const catalogDetailSlider = new Swiper('.catalog-detail__slider-inner', {
        navigation: {
            nextEl: ".catalog-detail__slider-pagination-arrow_next",
            prevEl: ".catalog-detail__slider-pagination-arrow_prev",
        },
        thumbs: {
            swiper: catalogDetailPaginationSlider,
        },
    });

    const productsGallerySlider = new Swiper('.catalog-detail__gallery-inner', {
        freeMode: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
        mousewheel: true,
        767: {
            spaceBetween: 30,
        },
    });

    let hamburgerIcon = document.getElementById('hamburger-menu-icon');
    let hamburgerCloseIcon = document.getElementById('hamburger-menu-close');

    if(hamburgerIcon){
        hamburgerIcon.addEventListener("click", showHamburgerMenu, false);
    }

    if(hamburgerCloseIcon){
        hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu, false);
    }

    function showHamburgerMenu() {
        let hamburgerMenu = document.getElementById('hamburger-menu');
        hamburgerMenu.classList.add('hamburger-menu_active');
    }

    function closeHamburgerMenu() {
        let hamburgerMenu = document.getElementById('hamburger-menu');
        hamburgerMenu.classList.remove('hamburger-menu_active');
    }

    const options = {
        root: document,
        rootMargin: '0px',
        threshold: 0
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let counter1 = new countUp('achievement1', 0, 1000);
                let counter2 = new countUp('achievement2', 0, 100000);
                let counter3 = new countUp('achievement3', 0, 30000);
                counter1.start();
                counter2.start();
                counter3.start();
                observer.unobserve(entry.target)
            }
        })
    }, options);
    const achievementsCounters = document.getElementById('achievements');
    observer.observe(achievementsCounters);


    const optionsVisible = {
        root: document,
        rootMargin: '-35.1% 0px -64.9% 0px',
        threshold: 0
    }

    const observerVisible = new IntersectionObserver((entries, observer) => {
        let label = document.getElementById("label-text");
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting) {
                label.style.opacity = "1" 
                label.innerHTML = entry.target.dataset.labelContent;
            }
            if (!entry.isIntersecting && entry.target.className == 'about-us') {
                label.style.opacity = "0" 
                // label.innerHTML = entry.target.dataset.labelContent;
            }
        })
    }, optionsVisible)
    
    const labelBlocks = document.querySelectorAll('section[data-label="true"]');
    labelBlocks.forEach(element => {
        observerVisible.observe(element);
    });


    let arrPhones = document.querySelectorAll('input[name="phone"]');
    let maskOptions = {
        mask: '+{7} 000 000 00 00'
    };
    arrPhones.forEach(phone => {
        IMask(phone, maskOptions);
    });

    function toggleSubmenu(item, submenu) {
        let datasubmenu = item.dataset.submenu;
        let submenu1 = document.querySelector("." + submenu + "[data-submenu=" + datasubmenu + "]");
        submenu1.classList.toggle(submenu + '_active')
    }

    let hamburerMenuSubmenuItem = document.querySelectorAll('.hamburger-menu__item_with-submenu');
    hamburerMenuSubmenuItem.forEach(item => {
        item.addEventListener("click",
        function () {
            toggleSubmenu(this, "hamburger-menu__submenu")  
        },
        false);
    });

    let mainMenuSubmenuItem = document.querySelectorAll('.menu__item_with-submenu');
    mainMenuSubmenuItem.forEach(item => {
        item.addEventListener("click", 
        function () {
            toggleSubmenu(this, "menu__submenu")    
        },
        false);
    });
});