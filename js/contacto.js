const form = document.getElementById('contactForm');
const btnSubmit = document.getElementById('btnSubmit');
const spinner = document.getElementById('spinner');
const btnText = btnSubmit.querySelector('.btn-text');
const modal = document.getElementById('confirmModal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Mostrar spinner y ocultar texto
    btnSubmit.disabled = true;
    btnText.style.display = 'none';
    spinner.style.display = 'block';

    // Simular envío (2 segundos de espera)
    setTimeout(() => {
        spinner.style.display = 'none';
        btnText.style.display = 'block';
        btnSubmit.disabled = false;
        
        // Mostrar Modal
        modal.classList.add('active');
        form.reset(); // Limpiar formulario
    }, 2000);
});

closeModal.onclick = () => modal.classList.remove('active');