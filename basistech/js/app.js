document.addEventListener("DOMContentLoaded", function(){
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
            element.classList.remove("btn_big")
            element.classList.add("btn_link")
        });
    }

    customSelect('.custom-select');

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
   });
});