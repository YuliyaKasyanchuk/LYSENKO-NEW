
$( document ).ready(function() {
    jQuery('.owl-carousel').owlCarousel({
        navigation : true, // показывать кнопки next и prev

        slideSpeed : 300,
        paginationSpeed : 400,

        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,

        autoplay:true,
        loop:true,
        smartSpeed:1000,
        // autoplayTimeout:2000//Автозапуск слайдера
       //Время смены слайда

    });

});