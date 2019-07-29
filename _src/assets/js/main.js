'use strict';

//Generar un número aleatorio hasta 100 y mostrarlo en la consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

// Al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

function showConsole(event){
  console.log(input.value);
}

btn.addEventListener('click',showConsole);

// 4. comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback
// correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")
const clue = do
function compareNumbers {
  if (input.value === myRandomNumber){
    "¡HAS GANADO, CAMPEONA!"
  } else if {
    "demasiado alto"
  } else {
    "demasiado bajo"
  }
}
// 5. actualizar el contador de intentos cada vez que el usuario pruebe

