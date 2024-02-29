 /* PARA SACAR LAS PARTES ENTERAS DE LAS OPERACIONES

veremos un ejemplo */


const a = 210;

const b = a /100;

console.log(Number.parseInt(b)); /* esto nos saca la parte entera de un numero en este caso la división da 2.10 y nos da 2 (esto si nos diese 2.9 nos daria igual 2) */
console.log(Math.round(b)); /*esto lo que hace es redondear un numero si es mayor o igual que 5 te lo redondea hacia arriba si no te lo redonda hacia abajo*/
console.log(Math.floor(b));/* redondea siempre hacia abajo da igual el decimal*/
console.log(Math.ceil(b)); /*redondea siempre hacia arriba da igual cual sea el resultado del decimal*/