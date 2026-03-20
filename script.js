document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    const mensaje = document.getElementById('mensaje');

    boton.addEventListener('click', () => {
        mensaje.textContent = '¡El JavaScript está funcionando correctamente!';
        mensaje.style.color = 'green';
    });
});
