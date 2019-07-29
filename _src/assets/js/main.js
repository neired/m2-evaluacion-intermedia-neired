'use strict';

//Generar un número aleatorio hasta 100 y mostrarlo en la consola
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

// Al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
//Comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const clue = document.querySelector('.clue');

function compareNumbers(event) {
  console.log(input.value);
  if (input.value > myRandomNumber) {
    clue.innerHTML = 'demasiado alto';
  } else if (input.value < myRandomNumber) {
    clue.innerHTML = 'demasiado bajo';
  } else {
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
  }
}

btn.addEventListener('click',compareNumbers);

// 5. actualizar el contador de intentos cada vez que el usuario pruebe

