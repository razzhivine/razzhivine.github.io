let slideUp = (target, duration = 500) => {
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
  window.setTimeout(() => {
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

let slideDown = (target, duration = 500) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;

  if (display === 'none')
    display = 'block';

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
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

let slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var reviewsSlider = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.reviews-slider-pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        return '<div class="controls__counter"><div class="controls__counter-current">' + String(current).padStart(2, '0') + '</div>' + '<div class="controls__counter-separator"></div>' + '<div class="controls__counter-total">' + String(total).padStart(2, '0') + '</div></div><div class="controls__progress"><div class="controls__progress-line" style="width:' + (current / total * 100) + '%"></div></div>';
      }
    },
    navigation: {
      prevEl: ".reviews-slider-prev",
      nextEl: ".reviews-slider-next",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  if (document.querySelectorAll('.js-click').length) {
    let items = document.querySelectorAll('.js-click');
    items.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('-active');
      })
    });
  }

  if (document.querySelectorAll('.js-faq').length) {
    let faqItems = document.querySelectorAll('.js-faq');
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        slideToggle(item.querySelector('.js-answer'));
      })
    });
  }

  if (document.querySelectorAll('.js-menu').length) {
    let menus = document.querySelectorAll('.js-menu');
    menus.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.js-hamburger[data-id="' + item.dataset.id + '"]').classList.add('-active')
      })
    });
  }

  if (document.querySelectorAll('.js-close').length) {
    let closeBtns = document.querySelectorAll('.js-close');
    closeBtns.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelector('.js-hamburger[data-id="' + item.dataset.id + '"]').classList.remove('-active')
      })
    });
  }

  if (document.querySelectorAll('.js-vacancies-btn').length) {
    let showVacanciesBtn = document.querySelectorAll('.js-vacancies-btn');
    showVacanciesBtn.forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.js-vacancies-item').forEach(element => {
          slideToggle(element);
        });
        text = item.innerText
        item.innerText = item.dataset.text
        item.dataset.text = text;
      })
    });
  }
});