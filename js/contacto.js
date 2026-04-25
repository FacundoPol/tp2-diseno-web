$(document).ready(function() {

    // VALIDACIÓN EN TIEMPO REAL (Consigna obligatoria)
    $('#formularioContacto input, #formularioContacto textarea').on('input', function() {
        const campo = $(this);
        const elementoNativo = this; // Accedemos a las propiedades de HTML5

        // 1. Si el campo está vacío, lo dejamos neutro (sin colores)
        if (campo.val().trim() === "") {
            campo.removeClass('is-valid is-invalid');
        } 
        // 2. Si el usuario escribió algo, validamos al toque
        else {
            if (elementoNativo.checkValidity()) {
                // Si el mail tiene @ y punto, o el nombre tiene el largo correcto
                campo.addClass('is-valid').removeClass('is-invalid');
            } else {
                // Si le falta el @ o es muy corto
                campo.addClass('is-invalid').removeClass('is-valid');
            }
        }
    });

    // LÓGICA DE ENVÍO (Spinner y Modal)
    $('#formularioContacto').on('submit', function(e) {
        e.preventDefault();
        const form = this;

        if (form.checkValidity()) {
            // Activar Spinner
            $('#textoBoton').text('ENVIANDO...');
            $('#indicadorCarga').removeClass('d-none');
            $('#botonEnviar').prop('disabled', true);

            setTimeout(function() {
                // Mostrar Modal
                const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
                modalExito.show();

                // Limpiar todo
                form.reset();
                $('#formularioContacto').removeClass('was-validated');
                $('.form-control').removeClass('is-valid is-invalid');
                
                // Resetear botón
                $('#textoBoton').text('ENVIAR CONSULTA');
                $('#indicadorCarga').addClass('d-none');
                $('#botonEnviar').prop('disabled', false);
            }, 2000);
        } else {
            $(form).addClass('was-validated');
        }
    });
});
