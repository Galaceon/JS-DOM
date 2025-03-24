// const heading = document.querySelector(".header__texto h2")
// heading.textContent = "Ejemplo para probar";


// /** QueryAll **/
// const enlaces = document.querySelectorAll('.navegacion a')
// enlaces[0].textContent = 'para probar'
// enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')

// /** Crear Elementos HTML **/
// const nuevoEnlace = document.createElement('A');

// nuevoEnlace.href = 'nuevo-enlace.html';

// nuevoEnlace.textContent = 'Tienda Virtual';

// nuevoEnlace.classList.add('navegacion__enlace');

// const nav = document.querySelector('.navegacion');
// nav.appendChild(nuevoEnlace)


// /** Eventos en JS **/
// window.onscroll = function() {
//     console.log('scrolling')
// }

// const btnEnviar = document.querySelector('.boton');

// btnEnviar.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log('hola')
// })

/** Eventos de los Inputs o TextArea **/



const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const {nombre, email, mensaje} = datos;

    if( nombre == '' || email == '' || mensaje == '') {
        mostrarAlerta('Debes rellenar todos los campos', true);
        return;
    }

    mostrarAlerta('Correcto, enviado');
})

function mostrarAlerta(mensaje, error = null) {
    const createAlert = document.createElement('P');
    createAlert.textContent = mensaje;

    if(error) {
        createAlert.classList.add('error')
    }else {
        createAlert.classList.add('correcto')
    }
    
    formulario.appendChild(createAlert);

    setTimeout( function() {
        createAlert.remove();
    }, 4000);
}


function leerTexto(e) {
    datos[e.target.id] = e.target.value

    console.log()
}

// 












// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const mensaje = document.querySelector('#mensaje');
// const formulario = document.querySelector('.formulario');

// formulario.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const nombreText = nombre.value;
//     const emailText = email.value;
//     const mensajeText = mensaje.value;
    
//     if( nombreText == '' || emailText == '' || mensajeText == '') {
//         const createError = document.createElement('P');
//         createError.textContent = 'Debes rellenar todos los campos';
//         createError.classList.add('error')
//         formulario.appendChild(createError)

//         setTimeout( function() {
//             createError.remove();
//         }, 4000);
//     }
//     else {
//         const createCorrect = document.createElement('P');
//         createCorrect.textContent = 'Correcto, puede entrar';
//         createCorrect.classList.add('correcto')
//         formulario.appendChild(createCorrect)

//         setTimeout( function() {
//             createCorrect.remove();
//         }, 4000);
//     }
// })