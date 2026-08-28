$( document ).ready(function() {
    $('.popular__list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-prev"></div>',
        nextArrow: '<div class="slider-arrow slider-next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.reviews__list').slick({
        dots: false,
        // infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-prev"></div>',
        nextArrow: '<div class="slider-arrow slider-next"></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: false,
                    centerMode: false
                }
            }
        ]
    });
    $(".reviews__list").on('afterChange', function(event, slick, currentSlide){
        $("#reviews__counter").text(currentSlide + 1);
     });
});
