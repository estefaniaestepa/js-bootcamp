/* COERCIÓN 
que pasa si tenemos una variable con un texto y lo comparamos con una variable que tiene un numero ?
que JS hace una conversion interna y hace la operacion. Esto no tiene sentido y muchos de los errores que hay es por la coerción
*/

/* ---------------------------------------------------------------------------------- */

/* SON LOS VALORES QUE JS INTERPRETA COMO FALSOS

VALUE       //        TIPE
null                  null
undefined             undefined
false                 Boolean
NaN                   Number (es un numero que te dice que no es un numero)
0                     Number
-0                    Number
0n                    bigInt
""                    srtring */ /* UN STRING VACIO EQUIVALE A FALSO */

/* ---------------------------------------------------------------------------------- */

/* EJEMPLOS TURBIOS DE OPERACIONES CON JS */

/* 1 < 2 < 3; 
TRUE porque?
RECORDEMOS QUE TRUE ES IGUAL A 1 
1 es menor que 2 (te dice true que es 1)
true 1 es menor que 3 (true porque 1 es menor a 3) */

/* 3 > 2 > 1;
FALSE porque?
RECORDEMOS QUE TRUE ES IGUAL A 1 
3 es mayor que 2 (te dira true que vale 1)
true 1 es mayor 1 (false porque 1 no es mayor a 1) */


/* let a = null;
(undefined)

a+= 'able'
('nullable') ESTO PASA PORQUE LE HA SUMADO ABLE A NULL
*/


/* '10' - 3
7 porque nos da 7 (como no podemos restar texto JS entiende que estamos haciendo una operación aridmetica y por eso te hace la resta)

'10' + 3
103 porque nos da 103 (aqui JS lo que entiende que estamos concatenadno a un texto por eso tres lo convierte en texto y lo concatena con el 10)
*/