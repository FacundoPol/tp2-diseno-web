
$(document).ready(function () {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });


    $('#tabla-precios tr').hover(
        function () {
            $(this).addClass('table-primary animate__animated animate__pulse');
        },
        function () {
            $(this).removeClass('table-primary animate__animated animate__pulse');
        }
    );


    $('#btnConfirmarPhishing').on('click', function () {

        $(this).html('<span class="spinner-border spinner-border-sm"></span> Cargando simulación...');

        setTimeout(function () {

            window.location.href = "./banco.html";
        }, 1500);
    });
});
