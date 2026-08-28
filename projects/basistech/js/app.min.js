document.addEventListener("DOMContentLoaded", function(){
    if(document.querySelector(".slider")){
        let slider = new Swiper(".slider", {
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
    }

    if(document.querySelector(".partners__slider")){
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
    }

    if(document.querySelector(".news-slider")){
        let news = new Swiper(".news-slider", {
            slidesPerView: "auto",
            spaceBetween: 24,
            breakpoints: {
                1023: {
                    slidesPerView: 3,
            
                },
            },
        });
    }

    if(document.querySelectorAll(".slider__item-content .btn")){
        if(window.matchMedia("(max-width: 767px)").matches){
            sliderButtons = document.querySelectorAll(".slider__item-content .btn");
            sliderButtons.forEach(element => {
                element.classList.remove("btn_big")
                element.classList.add("btn_link")
            });
        }
    }

    if(document.querySelectorAll(".page-products__item-content .btn")){
        if(window.matchMedia("(max-width: 767px)").matches){
            productsPageButtons = document.querySelectorAll(".page-products__item-content .btn");
            productsPageButtons.forEach(element => {
                element.classList.remove("btn_big")
                element.classList.add("btn_link")
            });
        }
    }

    if(document.querySelector(".custom-select")){
        customSelect('.custom-select');
    }
    
    let phoneInputs = document.querySelectorAll(".form__input[name='phone']")

    let maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };
    
    phoneInputs.forEach(phone => {
        IMask(phone, maskOptions);
    });

    let inputs = document.querySelectorAll(".form__input")
    let textareas = document.querySelectorAll(".form__textarea")

    inputs.forEach(element => {
        element.addEventListener('focus', () => {
            moveLabel(element, 'focus')
        });
        element.addEventListener('blur', () => {
            moveLabel(element, 'blur')
        });
    });

    textareas.forEach(element => {
        element.addEventListener('focus', () => {
            moveLabel(element, 'focus')
        });
        element.addEventListener('blur', () => {
            moveLabel(element, 'blur')
        });
    });

    function moveLabel(input, action) {
        if(action == 'focus'){
            let label = input.previousElementSibling
            label.classList.add("form__label_active");
        }else if(action == 'blur'){
            if(!input.value){
                let label = input.previousElementSibling
                label.classList.remove("form__label_active");
            }
        }
    }

    
    let popupsButtons = document.querySelectorAll("*[data-popup]");
    popupsButtons.forEach(element => {
        element.addEventListener('click', () => {
            let overlay = document.getElementById("overlay");
            let popup = document.querySelector("*[data-popup-id='" + element.dataset.popup +"']");
            overlay.classList.add("overlay_active")
            popup.classList.add("popup_active")
       });
    });

    let closeButtons = document.querySelectorAll(".popup__close");
    closeButtons.forEach(element => {
        element.addEventListener('click', () => {
            let overlay = document.getElementById("overlay");
            let popup = element.parentElement;
            overlay.classList.remove("overlay_active")
            popup.classList.remove("popup_active")
       });
    });

    let popups = document.querySelectorAll(".popup");
    let overlay = document.getElementById("overlay");
    
    overlay.addEventListener('click', () => {
        overlay.classList.remove("overlay_active")
        console.log(popups)
        popups.forEach(element => {
            element.classList.remove("popup_active")
        });
        productHamburger.classList.remove("product-header-hamburger-menu_active")
        productHamburgerIconClose.classList.remove("product-header__hamburger-icon-close_active")
        productHamburgerIcon.classList.remove("product-header__hamburger-icon_disabled")
   });

    let hamburger = document.getElementById("hamburger");
    let hamburgerIcon = document.getElementById("hamburger-icon");
    let hamburgerIconClose = document.getElementById("hamburger-icon-close");
    if(hamburger && hamburgerIcon && hamburgerIconClose){
        hamburgerIcon.addEventListener('click', () => {
            hamburger.classList.add("hamburger_active")
        });
        hamburgerIconClose.addEventListener('click', () => {
            hamburger.classList.remove("hamburger_active")
        });
    }

    let overflow = document.getElementById("overflow");
    let productHamburger = document.getElementById("product-header-hamburger-menu");
    let productHamburgerIcon = document.getElementById("product-header-hamburger-icon");
    let productHamburgerIconClose = document.getElementById("product-header-hamburger-icon-close");
    let productMenuItem = document.querySelectorAll(".product-menu-item");
    let firstScreen = document.getElementById("first-screen");
    let productHeader = document.getElementById("product-header");

    if(overflow && productHamburger && productHamburgerIcon && productHamburgerIconClose && productMenuItem && firstScreen && productHeader){
        console.log(1)
        productHamburgerIcon.addEventListener('click', () => {
            productHamburger.classList.add("product-header-hamburger-menu_active")
            productHamburgerIcon.classList.add("product-header__hamburger-icon_disabled")
            productHamburgerIconClose.classList.add("product-header__hamburger-icon-close_active")
            overlay.classList.add("overlay_active")
            
        });
        productHamburgerIconClose.addEventListener('click', () => {
            productHamburger.classList.remove("product-header-hamburger-menu_active")
            productHamburgerIconClose.classList.remove("product-header__hamburger-icon-close_active")
            productHamburgerIcon.classList.remove("product-header__hamburger-icon_disabled")
            overlay.classList.remove("overlay_active")
        });

        productMenuItem.forEach(element => {
            element.addEventListener('click', () => {
                let href = element.dataset.href
                let block = document.getElementById(href);
                window.scrollBy({
                    top: block.getBoundingClientRect().top - 80,
                    behavior : "smooth"
                });
                productHamburger.classList.remove("product-header-hamburger-menu_active")
                productHamburgerIconClose.classList.remove("product-header__hamburger-icon-close_active")
                productHamburgerIcon.classList.remove("product-header__hamburger-icon_disabled")
                overlay.classList.remove("overlay_active")
            });
        });

        document.addEventListener('scroll', () => {
            console.log(firstScreen.offsetHeight)
            console.log(scrollY)
            if(scrollY > firstScreen.offsetHeight){
                productHeader.classList.add("product-header_active")
            }else{
                productHeader.classList.remove("product-header_active")
                productHamburger.classList.remove("product-header-hamburger-menu_active")
                productHamburgerIconClose.classList.remove("product-header__hamburger-icon-close_active")
                productHamburgerIcon.classList.remove("product-header__hamburger-icon_disabled")
                overlay.classList.remove("overlay_active")
            }
        });
    }

    let tags = document.querySelectorAll("#tags .tags__item");
    let products = document.querySelectorAll("#products .products__item");
    let productsSelect = document.querySelector("#products-select");

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(tag => {
                tag.classList.remove("tags__item_active")
            });
            tag.classList.add("tags__item_active")
            let type = tag.dataset.type;

            products.forEach(product => {
                arrType = product.dataset.type.split(" ")
                product.classList.remove("products__item_active")
                if(arrType.includes(type)){
                    product.classList.add("products__item_active")
                }else if(type == "all"){
                    product.classList.add("products__item_active")
                }
            });

            // productsSelect.forEach(option => {
            //     arrType = option.dataset.type.split(" ")
            //     if(arrType.includes(type)){
            //         option.selected = true
            //     }
            // });
        });
    });

    productsSelect.addEventListener('change', () => {
        type = productsSelect.value

        products.forEach(product => {
            arrType = product.dataset.type.split(" ")
            product.classList.remove("products__item_active")
            if(arrType.includes(type)){
                product.classList.add("products__item_active")
            }else if(type == "all"){
                product.classList.add("products__item_active")
            }
        });
    });

    // productsSelect.forEach(option => {
    //     option.addEventListener('change', () => {
    //         // productsSelect.forEach(option => {
    //         //     option.classList.remove("tags__item_active")
    //         // });
    //         // option.classList.add("tags__item_active")
    //         let type = option.dataset.type;
    //         console.log(type)
    //         products.forEach(product => {
    //             arrType = product.dataset.type.split(" ")
    //             product.classList.remove("products__item_active")
    //             if(arrType.includes(type)){
    //                 product.classList.add("products__item_active")
    //             }else if(type == "all"){
    //                 product.classList.add("products__item_active")
    //             }
    //         });

    //         // productsSelect.forEach(option => {
    //         //     arrType = option.dataset.type.split(" ")
    //         //     if(arrType.includes(type)){
    //         //         option.selected = true
    //         //     }
    //         // });
    //     });
    // });
});