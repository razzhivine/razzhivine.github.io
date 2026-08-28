$(document).ready(function() {
  $('.hamburger-icon').on('click', function () {
    $(this).toggleClass('hamburger-icon_close');
    $('.hamburger-menu').toggleClass('hamburger-menu_active');
  });

  $('.hamburger-menu__item').on('click', function () {
    $('.hamburger-icon').removeClass('hamburger-icon_close');
    $('.hamburger-menu').removeClass('hamburger-menu_active');

    var block = $(this).data('block');
    
    $('html, body').animate({
        scrollTop: $('.block[data-block='+ block +']').offset().top
    }, 1000); 

  });
});