const heading = document.querySelector(".header__texto h2")
heading.textContent = "Ejemplo para probar";


/** QueryAll **/
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'para probar'
enlaces[0].classList.add('nueva-clase')
enlaces[0].classList.remove('navegacion__enlace')