$(document).ready(function() {
  const slider = new Swiper('.slider__list', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
 
  $(".catalog-sections__section").hover(function () {
    let height = $(this).height()
    height = height - 115;
    $(this).css("height", height + "px");
    $(this).children(".catalog-sections__section-inner").addClass("catalog-sections__section-inner_active");
  });

  $(".catalog-sections__section").mouseleave(function () {
    $(this).css("height", "");
    $(this).children(".catalog-sections__section-inner").removeClass("catalog-sections__section-inner_active");
  });

  $(".filter__button").click(function() {
    $(this).parents(".filter").children(".filter__content").fadeToggle(300);
  });

  $(".phones__icon").click(function() {
    $(this).parents(".phones").children(".phones__list ").fadeToggle(300);
  });

  $(".header__hamburger").click(function() {
    $(".hamburger-menu").addClass("hamburger-menu_active");
    $(".overlay").fadeIn(300);
  });

  $(".hamburger-menu__close, .overlay").click(function() {
    $(".hamburger-menu").removeClass("hamburger-menu_active");
    $(".overlay").fadeOut(300);
  });
});