//recuperar los elementos del dom que nos interesan
const boton = document.getElementsByTagName('button');
const envoltorio = document.getElementsByClassName('envoltorio-popup');
const cerrar = document.getElementsByClassName('cerrar-popup');


//Eventos
//click sobre el boton para mostrar el popup
boton[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'block';
})

//click sobre el boton cerrar.
cerrar[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'none';
})

//click sobre el envoltorio cerrar el popup
/* envoltorio[0].addEventListener('click', () => {
    envoltorio[0].style.display = 'none';
}) */