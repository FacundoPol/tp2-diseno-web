// * header
const btnBars = document.querySelector('.btn-bars');
const menuResponsive = document.querySelector('.menu-responsive');
const btnClose = document.querySelector('.btn-close');
//incializa el color desde localStorage y configura el toggle al hacer click
const btn = document.getElementById('btn-modo-oscuro');
const tema = localStorage.getItem('tema');
var icono=btn.querySelector('i');
if(tema=='dark-mode'){
    document.body.classList.add('dark-mode');
    icono.classList.remove("fa-sun");
    icono.classList.add("fa-moon");
}else{
    document.body.classList.remove('dark-mode');
    icono.classList.remove("fa-moon");
    icono.classList.add("fa-sun");
}
btn.addEventListener("click",function(){
    var icono=btn.querySelector('i');
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");
        localStorage.setItem('tema','light');
    }else{
        document.body.classList.add('dark-mode');
        icono.classList.remove("fa-sun");
        icono.classList.add("fa-moon");
        localStorage.setItem('tema','dark-mode');
    }
});
btnBars.addEventListener('click', () => {
	menuResponsive.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

btnClose.addEventListener('click', () => {
	menuResponsive.classList.remove('active');
    document.body.classList.remove('no-scroll');
});