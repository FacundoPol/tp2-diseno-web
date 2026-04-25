$(document).ready(function() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    //  Sistema de Filtros 
    $('input[type="radio"]').on('change', function() {
        var filtro = $(this).attr('id'); 
        var articulos = $('.row .news-item'); 

        if (filtro === 'todas') {
            articulos.show(); // Muestra todos
        } else {
            articulos.hide(); // Esconde todos primero
            articulos.filter('.' + filtro).show(); // Filtra y muestra los que coinciden
        }
    });

    //  Efecto Zoom 
    $('.news-item').hover(
        function() { $(this).addClass('card-zoom-activo'); }, 
        function() { $(this).removeClass('card-zoom-activo'); }
    );

});