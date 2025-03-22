const heading = document.querySelector(".header__texto h2")
heading.textContent = "Ejemplo para probar";


/** QueryAll **/
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'para probar'
enlaces[0].classList.add('nueva-clase')
enlaces[0].classList.remove('navegacion__enlace')

/** Crear Elementos HTML **/
const nuevoEnlace = document.createElement('A');

nuevoEnlace.href = 'nuevo-enlace.html';

nuevoEnlace.textContent = 'Tienda Virtual';

nuevoEnlace.classList.add('navegacion__enlace');

const nav = document.querySelector('.navegacion');
nav.appendChild(nuevoEnlace)


/** Eventos en JS **/
window.onscroll = function() {
    console.log('scrolling')
}

const btnEnviar = document.querySelector('.boton');

btnEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('hola')
})