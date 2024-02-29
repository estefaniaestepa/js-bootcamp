// Ejecuta "npm install"
/**
 * Crear un programa que, dado un número, te calcule el factorial de ese número.
 * Por ejemplo:
 * 5 => 5 * 4 * 3 * 2 * 1 = 120
 */

const prompt = require('prompt-sync')({ sigint: true });

const number = prompt('Introduzca un número: ');

// Empieza el ejercicio debajo


let multi = 1 ;      //5
for(let i = 1; i <= number; i++){  
    multi *= i; //multi = i*multi;
}
console.log('El numero factorial es: ' + multi);

// multi  i * multi
// 1 = 1 * 1
// 1 = 2  * 1
// 2 = 3 * 2
// 6 = 4 * 6
//24 = 5 * 24 = 120



