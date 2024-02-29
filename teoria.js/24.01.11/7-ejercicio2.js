/* EJERCICIO 1
Tenemos 3 trimestre con 3 notas 
hay que calcular la media aridmetica de esas tres notas
 */

const nota1 = 10;
const nota2 = 6;
const nota3 = 4;

console.log ((nota1 + nota2 + nota3) / 3); /* ESTO NOS DARÁ 6.6666666 PORQUE SUMA LAS 3 NOTAS Y LAS DIVIDE ENTRE 3 */

console.log (nota1 + nota2 + nota3 / 3);/*  ESTO NOS DARÁ 17.3333333 PORQUE SUMA NOTA1 Y NOTA2 Y DIVIDE NOTA3 ENTRE 3 */

console.log ((nota1 + nota2 + nota3) % 3); /* SI QUEREMOS HACER EL MODULO NOS DA 2 QUE ES EL RESTO */


/* ---------------------------------------------------------------------------------- */

/* EJERCICIO 2
Impirmir los siguientes numeros y que los separe que nos de cada uno de esos elementos
*/
/* const a= 123;

console.log (a-122);
console.log (a-121);
console.log (a-120);
Esto es una forma de sacarlo pero no es la correcta
*/




/* Vamos a verlo con operaciones aridmeticas 
-Queremos hacer una varible que contenga un valor numerico y sacarle el primero número */

const a = 210; 

/* console.log (a %100); esto da 2 porque si dividimos 200/10 da 2 y 10/100 no se puede por lo que lo nos queda el resto que en este caso en 10 */
/* ---------------------------------------------------------------------------------- */
/* PRIMER EJEMPLO */
console.log (a -(a % 100) /100);
/*con esto (a %100)  lo que hacemos es dividir 210 de forma entera entre 100 nos cabe a 2 y el resto nos queda 10. Luego hacemos a 210 -10 nos da 200 y eso lo dividimos entre 100 y nos da 2 que es lo que queriamos */

console.log (a -(a % 10) /10);/*  SI QUISIERAMOS SACAR EL 10, SERIA LO MISMO PERO LO DIVIDIRIAMOS ENTRE 10 */


/* ---------------------------------------------------------------------------------- */
/* SEGUNDO EJEMPLO */
console.log (Number.parseInt (2/100)); /*hacemos la division entera y parseamos a númeo entero 200/100 da 2.1 pero con el .parseInt redondea a numero entero*/
/*el 100 a 210 le mueve la coma dos numeros es decir pone una coma entre 2,10 porque 100 tiene dos zeros.
 lo estamos dividiendo con % que son numeros enteros entonces te da 10
luego coges y a a(210) le restas 10, y te da 200.
la ultima operación es dividir entre 100 y el resultado es dos */


/* ---------------------------------------------------------------------------------- */
/* TERCER EJEMPLO */
a1= `${a}`; /*seria convertirlo en String */
console.log (a1[0]);/*  y del String sacar el primer elemento */
/* Si queremos sacar un número lo volvemos a parsear con el .parseInt */