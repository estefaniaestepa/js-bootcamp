/* Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers */

const userAnwsers = [];

function confirmExample(description) {
  //description variable string
  return confirm(description); //// Ventana de confirmación con el texto proporcionado (aceptar - cancelar)
}

function promptExample(description) {
  return propmt(description); //Ventana de prompt con el texto proporcionado
}

function father(description, callback) {
  const result = callback(description);
  userAnwsers.push(result);
}

father("¿Que tal?", confirmExample);
father("¿Cuál es tu nombre", promptExample);

console.log(userAnwsers);
// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');
