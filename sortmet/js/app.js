document.addEventListener("DOMContentLoaded", function() {
  let catalogSlider = new Swiper("#catalog-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".arrow_next",
        prevEl: ".arrow_prev",
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1215: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
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

  let suppliersSlider = new Swiper("#suppliers-slider", {
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
    spaceBetween: 20,
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
    navigation: {
      nextEl: "#reviews-next",
      prevEl: "#reviews-prev",
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

  /* TOOGLE */
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
      })();
    };

    // ** FADE IN FUNCTION **
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .05) > 0.5)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };

    let fadeToggle = (el, display) => {
      if (window.getComputedStyle(el).display === 'none') {
        return fadeIn(el, display);
      } else {
        return fadeOut(el, display);
      }
  }

  let faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(element => {
    element.addEventListener('click', function () {
      let answer = element.querySelector('.faq__answer');
      element.classList.toggle('faq__item_active');
      slideToggle(answer, 300);
    });
  });

  let catalogBtn = document.getElementById('catalog-btn');
  let catalogMenu = document.getElementById('catalog-menu');
  let overlay = document.getElementById('overlay');
  catalogBtn.addEventListener('click', function () {
    fadeToggle(overlay);
    slideToggle(catalogMenu);
    catalogBtn.classList.toggle('catalog-btn_active');
  });

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

  let hamburger = document.getElementById('hamburger')
  let hamburgerIcon = document.getElementById('hamburger-icon')
  hamburgerIcon.addEventListener('click', function () {
    
    hamburgerIcon.classList.toggle('hamburger-icon_close')
    hamburger.classList.toggle('hamburger_active')
    fadeToggle(overlay);
  });
});