document.addEventListener('DOMContentLoaded', () => {
    const poemas = document.querySelectorAll('.poema');
    const puntos = document.querySelectorAll('.punto');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnSiguiente = document.querySelector('.btn-siguiente');
    let posicionActual = 0;

    // Función para mostrar poema específico
    function mostrarPoema(n) {
        poemas.forEach(poema => poema.classList.remove('activo'));
        puntos.forEach(punto => punto.classList.remove('activo'));
        
        poemas[n].classList.add('activo');
        puntos[n].classList.add('activo');
    }

    // Event listeners para botones
    btnSiguiente.addEventListener('click', () => {
        posicionActual = (posicionActual + 1) % poemas.length;
        mostrarPoema(posicionActual);
    });

    btnAnterior.addEventListener('click', () => {
        posicionActual = (posicionActual - 1 + poemas.length) % poemas.length;
        mostrarPoema(posicionActual);
    });

    // Event listeners para puntos
    puntos.forEach((punto, indice) => {
        punto.addEventListener('click', () => {
            posicionActual = indice;
            mostrarPoema(posicionActual);
        });
    });

    // Efecto de corazones flotantes
    document.addEventListener('mousemove', (e) => {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-latido';
        corazon.style.left = `${e.pageX}px`;
        corazon.style.top = `${e.pageY}px`;
        corazon.style.animation = `latido ${Math.random() * 0.5 + 0.5}s infinite`;
        
        document.body.appendChild(corazon);
        
        setTimeout(() => {
            corazon.remove();
        }, 2000);
    });
});