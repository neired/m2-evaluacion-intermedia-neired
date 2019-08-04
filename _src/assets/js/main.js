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
const counter = document.querySelector('.counter');
const reset = document.querySelector('.reset-btn');

function compareNumbers(event) {
  console.log(input.value);
  if (input.value > myRandomNumber && input.value <= 100) {
    clue.innerHTML = 'demasiado alto';
  } else if (input.value < myRandomNumber && input.value >= 1) {
    clue.innerHTML = 'demasiado bajo';
  } else if (input.value === '') {
    clue.innerHTML = '¿qué tal si pruebas con un número de verdad?'
  } else if (input.value < 1 || input.value > 100) {
    clue.innerHTML = 'el número introducido debe estar comprendido entre el 1 y el 100';
  } else {
    clue.innerHTML = '¡HAS GANADO, CAMPEONA!';
  }
}
btn.addEventListener('click',compareNumbers);

//Que se ejecute compareNumbers y countTries cuando se pulse la tecla de enter
function compareWithEnter() {
  if(event.keyCode===13) {
    compareNumbers();
    countTries();
  }
};
input.addEventListener('keypress', compareWithEnter);

//Actualizar el contador de intentos cada vez que el usuario pruebe
function countTries (event){
  const tries = parseInt(counter.innerHTML) + 1;
  counter.innerHTML = tries;
}
btn.addEventListener('click', countTries);

//Añade un botón de reset
//handler que modifique el counter, el input, el feedback, y ejecute myRandomNumber
function resetGame (event) {
  const myRandomNumber = getRandomNumber(100);
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
  input.value = '';
  counter.innerHTML = 0;
  clue.innerHTML = 'Escribe un número y dale a Prueba';
};

reset.addEventListener('click', resetGame);
