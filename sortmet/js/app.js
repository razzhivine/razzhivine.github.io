document.addEventListener("DOMContentLoaded", function() {
  let catalogSlider1 = new Swiper("#catalog-slider-1", {
      slidesPerView: 2,
      spaceBetween: 10,
      pagination: {
        el: "#catalog-slider-1-pagination",
      },
      navigation: {
        nextEl: "#catalog-slider-1-arrow-next",
        prevEl: "#catalog-slider-1-arrow-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1215:{
          slidesPerView: 4,
        }
      },
  });

  var elementSliderThumb = new Swiper("#element-slider-thumb", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    navigation: {
      nextEl: "#element-slider-thumb-arrow-next",
      prevEl: "#element-slider-thumb-arrow-prev",
    },
    // freeMode: true,
    // watchSlidesProgress: true,
  });

  var elementSlider = new Swiper("#element-slider", {
    spaceBetween: 10,
    pagination: {
      el: "#element-slider-pagination",
    },
    navigation: {
      nextEl: "#element-slider-thumb-arrow-next",
      prevEl: "#element-slider-thumb-arrow-prev",
    },
    thumbs: {
      swiper: elementSliderThumb,
    },
  });

  let catalogSlider2 = new Swiper("#catalog-slider-2", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: "#catalog-slider-2-pagination",
    },
    navigation: {
      nextEl: "#catalog-slider-2-arrow-next",
      prevEl: "#catalog-slider-2-arrow-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
      1215:{
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
  });

  let servicesSlider = new Swiper("#services-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: "row"
    },
    breakpoints: {
     1024:{
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: "row"
      },
     }
    },

  });

  let suppilersSlider = new Swiper("#suppilers-slider", {
    // freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      767: {
        spaceBetween: 20,
      },
    },
  });

  let buyersSlider = new Swiper("#buyers-slider", {
    // freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    breakpoints: {
      767: {
        spaceBetween: 20,
      },
    },
  });

  let newsSlider = new Swiper("#news-slider", {
    // freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    
    breakpoints: {
      1215: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  let reviewsSlider = new Swiper("#reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: "#reviews-pagination",
    },
    navigation: {
      nextEl: "#reviews-next",
      prevEl: "#reviews-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1215: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  let aboutUsAdvantagesSlider = new Swiper("#about-us-advantages-slider", {
    freeMode: true,
    slidesPerView: 'auto',
  });

  let gallerySlider = new Swiper("#gallery-slider", {
    slidesPerView: 'auto',
    freeMode: true,
    navigation: {
      nextEl: "#gallery-next",
      prevEl: "#gallery-prev",
    },
  });

  let catalogTagsSlider = new Swiper("#catalog-tags-slider", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: "#catalog-tags-slider-arrow-next",
      prevEl: "#catalog-tags-slider-arrow-prev",
    },
  });

  var deliverySlider = new Swiper("#delivery-slider", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    breakpoints: {
      767: {
        spaceBetween: 20,
      },
      1214: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    },
  });
    /* SLIDE UP */
  let slideUp = (target, duration=500) => {
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.boxSizing = 'border-box';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout( () => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            //alert("!");
      }, duration);
  }

  /* SLIDE DOWN */
  let slideDown = (target, duration=500) => {

      target.style.removeProperty('display');
      let display = window.getComputedStyle(target).display;
      if (display === 'none') display = 'block';
      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.boxSizing = 'border-box';
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
      }, duration);
  }

  /* SLIDE TOOGLE */
  let slideToggle = (target, duration = 500) => {
      if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
      } else {
        return slideUp(target, duration);
      }
  }

  // ** FADE OUT FUNCTION **
  function fadeOut(el) {
    el.style.opacity = 0.5;
    (function fade() {
        if ((el.style.opacity -= .05) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
      }
    )();
  };

  // ** FADE IN FUNCTION **
  function fadeIn(el, display, opacity = 0.5) {
      el.style.opacity = 0;
      el.style.display = display || "block";
      (function fade() {
          var val = parseFloat(el.style.opacity);
          if (!((val += .05) > opacity)) {
              el.style.opacity = val;
              requestAnimationFrame(fade);
          }
      }
    )();
  };

  let fadeToggle = (el, display, opacity) => {
    if (window.getComputedStyle(el).display === 'none') {
      return fadeIn(el, display, opacity);
    } else {
      return fadeOut(el, display);
    }
  }

  if(document.querySelectorAll('.faq__item').length){
    let faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach(element => {
      element.addEventListener('click', function () {
        let answer = element.querySelector('.faq__answer');
        element.classList.toggle('faq__item_active');
        slideToggle(answer, 300);
      });
    });
  }


  let catalogBtn = document.getElementById('catalog-btn');
  let catalogMenu = document.getElementById('catalog-menu');
  let overlay = document.getElementById('overlay');
  catalogBtn.addEventListener('click', function () {
    fadeToggle(overlay);
    slideToggle(catalogMenu);
    catalogBtn.classList.toggle('catalog-btn_active');
  });

  if(document.getElementById('seo-controller') !== null){
    let seoController = document.getElementById('seo-controller');
    seoController.addEventListener('click', function () {
      let dataText = seoController.textContent
      let content = seoController.previousElementSibling
      console.log(content);
      seoController.innerText = seoController.dataset.text;
      seoController.dataset.text = dataText;
      seoController.classList.toggle('seo__controller_active');
      content.classList.toggle('seo__content_open');
    });
  }

  if(document.querySelectorAll('.categories__item').length){
    let categories = document.querySelectorAll('.categories__item')
    function hideCategories(categories) {
      let i = 0;
      categories.forEach(element => {
        if (window.matchMedia("(max-width: 767px)").matches && i > 5) {
          element.classList.add('categories__item_hide');
        } else {
          element.classList.remove('categories__item_hide')
        }
        i++;
      })
    }
    hideCategories(categories);
  
    let showCategories = document.getElementById('show-categories')
    showCategories.addEventListener('click', function () {
      categories.forEach(element => {
          element.classList.remove('categories__item_hide')
      })
      showCategories.classList.add('categories__more_disable')
    });
  }


  let hamburger = document.getElementById('hamburger')
  let hamburgerIcon = document.getElementById('hamburger-icon')
  hamburgerIcon.addEventListener('click', function () {
    
    hamburgerIcon.classList.toggle('hamburger-icon_close')
    hamburger.classList.toggle('hamburger_active')
    fadeToggle(overlay);
  });

  let citySelect = document.getElementById('city-desk');
  let cityChanger = document.getElementById('city-changer');
  let cityChangerClose = document.getElementById('city-changer-close');

  citySelect.addEventListener('click', function () {
    // slideToggle(cityBlock);
    fadeIn(overlay);
    fadeIn(cityChanger, false, 1);
    overlay.classList.add('overlay_z-index');
  });

  cityChangerClose.addEventListener('click', function () {
    fadeOut(overlay);
    fadeOut(cityChanger);
    overlay.classList.remove('overlay_z-index');
  });

  let filterListControllers = document.querySelectorAll('.open-filter-list');
  filterListControllers.forEach(element => {
    element.addEventListener('click', (e)=>{
      let list = element.nextElementSibling;
      slideToggle(list);
      element.classList.toggle('filter__block-caption_active')
    })
  });
  
  let prompts = document.querySelectorAll('.prompt__icon');
  prompts.forEach(element => {
    element.addEventListener('click', (e)=>{
      e.stopPropagation();
      let block = element.nextElementSibling;
      fadeToggle(block, false, 1);
    })
  });

  let showMoreFilter = document.querySelectorAll('.filter__block-show-more');
  showMoreFilter.forEach(element => {
    element.addEventListener('click', ()=>{
      let hiddenItems = element.parentElement.querySelectorAll('.filter__block-item_hidden');
      hiddenItems.forEach(element => {
        slideToggle(element);
      });
      let oldText = element.innerText;
      element.innerText = element.dataset.text;
      element.dataset.text = oldText;

    })
  });


  if(document.getElementById('sort') !== null){
    let sort = document.getElementById('sort');
    sort.addEventListener('click', (e)=>{
      let sortBlock = sort.nextElementSibling;
      slideToggle(sortBlock);
      sort.classList.toggle('sort__value_active')
    });
  }
  const rangeSliderInit = () => { // создаем функцию инициализации слайдера
    const range = document.getElementById('range'); // Ищем слайдер
    const inputMin = document.getElementById('min'); // Ищем input с меньшим значнием
    const inputMax = document.getElementById('max'); // Ищем input с большим значнием
  
    if (!range || !inputMin || !inputMax) return // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок
  
    const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения
    
    new noUiSlider.create(range, { // инициализируем слайдер
        start: [1000, 50000], // устанавливаем начальные значения
        connect: true, // указываем что нужно показывать выбранный диапазон
        range: { // устанавливаем минимальное и максимальное значения
          'min': 0,
          'max': 100000
        },
        step: 1, // шаг изменения значений
      }
    )
    
    range.noUiSlider.on('update', function (values, handle) { // при изменений положения элементов управления слайдера изменяем соответствующие значения
      inputs[handle].value = parseInt(values[handle]);
    });
    
    inputMin.addEventListener('change', function () { // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
      range.noUiSlider.set([this.value, null]);
    });
    
    inputMax.addEventListener('change', function () { // при изменении большего значения в input - меняем положение соответствующего элемента управления
      range.noUiSlider.set([null, this.value]);
    });
    
  }
  rangeSliderInit();

  if(document.getElementById('regions') !== null){
    let regions = document.getElementById('regions');
    let regionsController = document.getElementById('show-regions');

    regionsController.addEventListener('click', () =>{
      regions.classList.toggle('regions__inner_open');
      regionsController.classList.toggle('regions__show-more_open');

      let oldText = regionsController.innerText;
      regionsController.innerText = regionsController.dataset.text;
      regionsController.dataset.text = oldText;
    });
  }

  if(document.getElementById('navigation') !== null){
    let navigationItems = document.querySelectorAll('.navigation__item');
    let infoBlocks = document.querySelectorAll('.info-block');
    
    navigationItems.forEach(element => {

      element.addEventListener('click', () =>{
        let id = element.dataset.id;

        navigationItems.forEach(element => {
          element.classList.remove('navigation__item_active');
        });
        infoBlocks.forEach(element => {
          if(element.getAttribute('id') == id){
            element.classList.add('info-block_active');
          }else{
          element.classList.remove('info-block_active');
          }
        });
        element.classList.add('navigation__item_active');
      });
    });

    if(window.matchMedia("(max-width: 1023px)").matches){
      infoBlocks.forEach(element => {
        element.classList.remove('info-block');
        element.classList.remove('info-block_active');
        element.classList.add('info-block_mobile');
      });

      let infoBlocksControllers = document.querySelectorAll('.info-block__controller');
      let infoBlocksMobile = document.querySelectorAll('.info-block__mobile');
      infoBlocksControllers.forEach(element => {
        element.addEventListener('click', () =>{
          let block = element.nextElementSibling;
          element.classList.toggle('info-block__controller_active');
          block.classList.toggle('info-block__mobile_active');
        });
      });
    }
    
  }

  if(document.querySelectorAll('.cart-item-services-controller').length){
    let servicesController = document.querySelectorAll('.cart-item-services-controller');
    servicesController.forEach(element => {
      element.addEventListener('click', () =>{
        element.classList.toggle('cart__item-services-title_active')
        let list = element.nextElementSibling;
        slideToggle(list);
      });
    });
  }


  if(document.querySelectorAll('.input').length){
    let inputs = document.querySelectorAll(".input__input")
    inputs.forEach(element => {
        element.addEventListener('focus', () => {
            moveLabel(element, 'focus')
        });
        element.addEventListener('blur', () => {
            moveLabel(element, 'blur')
        });
    });
  }

  if(document.querySelectorAll('.textarea').length){
    let textareas = document.querySelectorAll(".textarea__textarea")
    textareas.forEach(element => {
        element.addEventListener('focus', () => {
            moveLabel(element, 'focus')
        });
        element.addEventListener('blur', () => {
            moveLabel(element, 'blur')
        });
    });
  }
  function moveLabel(input, action) {
    if(action == 'focus'){
        let label = input.previousElementSibling
        label.classList.add("-active");
    }else if(action == 'blur'){
        if(!input.value){
            let label = input.previousElementSibling
            label.classList.remove("-active");
        }
    }
}
});