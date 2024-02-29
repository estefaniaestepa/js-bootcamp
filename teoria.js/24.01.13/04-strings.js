/* LOS STRINGS son textos */

/* COMO PODEMOS HACER PARA MANIPULARLOS */

const a = 'Hola Mundo!'; /*esto es como si fuese a grosomodo un array de letras, string es un conjunto de caracteres*/

console.log(a[0]); /* con esto sacamos el primer elemento que es la H, lo mismo que un array */

console.log(a.length); /*sabemos cuantas letras, simbolos o espacios tiene, cuenta todo en este caso saldrá 11*/

console.log(a.charAt[1]); /*nos devolveria la letra que está en el indice 1 en este caso es la 0*/

console.log(a.concat('Hola')); /* con esto concatenamos Hola Mundo!Hola */
console.log(a +'Hola'); /*tambien se puede concatenar de esta manera es lo mismo que la anterior*/

console.log(a.includes('Hola')); /* aqui nos devuelve true o false si el texto incluye lo que le hemos indicado*/ 

console.log(a.indexOf('o')); /*te dice la primera posicion de lo que le hemos indicado en este caso 1*/

console.log(a.lastIndexOf('o')); /* te dice la ultima posicion de lo que le hemos indicado en este caso 9*/

console.log(a.substring(0, 2)); /* para sacar un fragmento le decimos la posicion del principio y la del final, se hace una copia y en este caso nos sale Ho */

console.log(a.toUpperCase()); /* convierte todo a mayusculas HOLA MUNDO! */

console.log(a.toLocaleLowerCase()); /*convierte todo a minuscula*/

console.log(a.trim()); /* hay veces que los strings por lo que sea los usuarios le meten espacios al principio y al final y esto lo que hace es que te recorta los espacios recorta los espacios, tabulaciones, saltos de linea del principio y final */

console.log(a.trimStart()); /* recorta los espacios, tabulaciones, saltos de lineas del principio*/

console.log(a.trimEnd()); /* recorta los espacios, tabulaciones, saltos de linea del final */

console.log(a.split('')); /* me convierte un string en un array y me lo separa por un seprador ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o', '!']  , TE INCLUYE EL ESPACIO PORQUE ES UN CARACTER , esta es la forma más habitual*/
console.log(a.split(' ')); /* si quisieramos separar las palabras pondriamos un espacio ['Hola', 'Mundo!'] */
console.log(a.split('').join('|'));/* esto nos lo separa de la siguiente manera H|o|l|a| |M|u|n|d|o|! */
console.log(a.split('').join(',')); /* esto lo separa de la siguiente manera H,o,l,a, ,M,u,n,d,o,! */