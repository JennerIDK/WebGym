// Inicialización del carrusel del equipo
$(".ts-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
        320: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});

// Inicialización de imágenes de fondo
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});