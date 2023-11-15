// script.js

// Función para manejar el evento de scroll y mostrar/ocultar el botón de regreso arriba
function handleScroll() {
    var scrollValue = $(window).scrollTop();
    var backToTopButton = $(".back-to-top");

    if (scrollValue > 500) {
        backToTopButton.fadeIn();
    } else {
        backToTopButton.fadeOut();
    }
}

// Función para manejar el clic en el botón de regreso arriba
function scrollToTop() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

// Asociar funciones a eventos
$(document).ready(function () {
    // Asociar la función de scroll al evento de desplazamiento
    $(window).scroll(handleScroll);

    // Asociar la función de regreso arriba al clic en el botón correspondiente
    $(".back-to-top").click(scrollToTop);
});
