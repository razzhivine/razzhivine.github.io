document.addEventListener('DOMContentLoaded', function () {
  
    const productPaginationSlider = new Swiper('.product__slider-pagination-inner', {
        direction: 'vertical',
        slidesPerView: 3,
        slideToClickedSlide: true,
        spaceBetween: 50,
       
    });

    const productSlider = new Swiper('.product__slider-inner', {
        autoHeight: true,
        navigation: {
            nextEl: ".product__slider-pagination-arrow_next",
            prevEl: ".product__slider-pagination-arrow_prev",
        },
        thumbs: {
            swiper: productPaginationSlider,
        },
    });

    let tabsController = document.querySelectorAll('.characteristics__title');
    let tabs = document.querySelectorAll('.characteristics__item');
    tabsController.forEach(element => {
        element.addEventListener('click', ()=>{
            tabs.forEach(tab =>{
                // console.log(tab)
                tab.classList.remove('characteristics__item_active')
            })
            element.parentNode.classList.add('characteristics__item_active')
        })
    });

}, false);