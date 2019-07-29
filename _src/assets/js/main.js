'use strict';

// 2. generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola
// (podéis usar la función de este codepen)

// 3. al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
//constantes
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
//handler
function showConsole(event){
  console.log(input.innerHTML);
}
//listener
btn.addEventListener('keyup',showConsole);


// 4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback
// correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
// 5. actualizar el contador de intentos cada vez que el usuario pruebe

