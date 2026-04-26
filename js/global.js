// * header
// // const btnBars = document.querySelector('.btn-bars');
// const menuResponsive = document.querySelector('.menu-responsive');
// const btnClose = document.querySelector('.btn-close');

$(document).ready(function () {
    //incializa el color desde localStorage y configura el toggle al hacer click
    const navbar=document.querySelector('.navbar');
    const btn = document.getElementById('btn-modo-oscuro');
    const tema = localStorage.getItem('tema');
    var icono = btn.querySelector('i');
    $(".hero-banner .content").fadeIn(2000, function () { });
    if (tema == 'dark-mode') {
        document.body.classList.add('dark-mode');
        navbar.setAttribute('data-bs-theme','dark');
        icono.classList.remove("fa-sun");
        icono.classList.add("fa-moon");
    } else {
        document.body.classList.remove('dark-mode');
        navbar.setAttribute('data-bs-theme','light');
        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");
    }
    btn.addEventListener("click", function () {
        var icono = btn.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            navbar.setAttribute('data-bs-theme','light');
            icono.classList.remove("fa-moon");
            icono.classList.add("fa-sun");
            localStorage.setItem('tema', 'light');
        } else {
            document.body.classList.add('dark-mode');
            navbar.setAttribute('data-bs-theme','dark');
            icono.classList.remove("fa-sun");
            icono.classList.add("fa-moon");
            localStorage.setItem('tema', 'dark-mode');
        }
    });
    $(".numero").each(function () {
        var contador = $(this),
            countTo = contador.attr("data-count");

        $({ countNum: contador.text() }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    contador.text(Math.floor(this.countNum) + "+");
                },
                complete: function () {
                    contador.text(this.countNum + "+");
                }
            }
        )
    })
    
})