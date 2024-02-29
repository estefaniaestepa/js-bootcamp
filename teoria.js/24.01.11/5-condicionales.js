/* CONDICIONALES 1


IF Y ELSE 
-Los usamos para condicionar la ejecución de un fragmento de código.
-Se usa la siguiente estructura:
*/

if (condicion){
  //cuerpo que se ejecuta si la condicion se cumple
}else if (condicion2){
// cuerpo que se ejecuta si la condicion2 se cumple
}else{
  // cuerpo que se ejecuta si no se cumple ninguna de las condiciones
}

/* EJEMPLO DE IF Y ELSE

if (true){
console.log ('Hola'); LA CONSOLA NOS IMPRIME Hola
}

if (false){
console.log ('Hola'); LA CONSOLA NOS IMPRIME Undefined no imprime nada porque no entra
}else{
  console.log ('No entra'); LA CONSOLA IMPRIME No entra porque es FALSE, no se cumple entra en la siguiente 
}

if (true){
console.log ('Hola'); LA CONSOLA NOS IMPRIME Hola PORQUE NO ENTRA EN EL ELSE PORQUE NO ES SI NO
}else{
  console.log ('No entra'); 
}

if (true){
console.log ('Hola'); 
}
console.log ('No entra'); LA CONSOLA NOS IMPRIME Hola Y No entra SE EJECUTAN LAS DOS  


if (false){
console.log ('Hola'); 
}
console.log ('No entra'); LA CONSOLA NOS IMPRIME No entra IF SOLO CONDICIONA EL DOMINIO (true) POR LO TANTO LO PRIMERO NO SE IMPRIME Y LO SEGUNDO SI, PORQUE ESTA FUERA DE CUALQUIER CONDICION Y SIEMPRE SE VA A EJECUTAR


if (false && TRUE){
console.log ('Hola'); 
}
console.log ('No entra'); LA CONSOLA NOS IMPRIME No entra SE EJECUTARIAN LAS DOS SI FUESE true && true
*/

/* ---------------------------------------------------------------------------------- */

/* CONDICIONALES 2 : OPERADOR TERNARIO
-Es un operador que se usa en sustitución de una sentencia if.
-Se suele usar en casos puntuales como una asignación de valor condicional en una variable. En otros casos es mala práctica porque dificulta la lectura del código.*/

/* const variable (condicion) ? 'el valor cuando la condicion es true' : 'valor cuando la condicion es false'; */

/* VEREMOS UN EJEMPLO DE OPERADOR TERNARIO
const a = (2 > 3 ) ? '4' : null //si 2 es mayor que 3 entonces ? 4 y si no nulo  
Si le preguntamos a la consola (a cuanto vale nos da null porque 2 no es mayor que 3)

const b = (2 < 3 ) ? '4' : null //si 2 es mayor que 3 entonces ? 4 y si no nulo  
Si le preguntamos a la consola (b cuanto vale nos da 4 porque 2 no es menor que 3)
*/


/* ---------------------------------------------------------------------------------- */

/* CONDICIONALES 3: NULL COALESCING 
-Es un operador que se para comprobar un valor null. Se usa mucho en arrays
-Se suele usar en casos puntuales como una asignación de valor por defecto en una variable.
-Sólo actúa si variable2 es null o undefined.*/
const variable2 = null;
const variable = variable2 ?? 'valor por defecto';


/* ---------------------------------------------------------------------------------- */

/* CONDICIONALES 4: CORTOCIRCUITO
-Es una operación que se realiza frecuentemente en algunas ocasiones.
-Se suele usar en una asignación de valor por defecto en una variable. 
-Es similar con el operador anterior. Se diferencia del anterior en que variable2 tiene que ser falsy. */

/* const variable2 = '';  UN STRING VACIO EQUIVALE A FALSO
const variable = variable2 || 'valor por defecto'; 

SE EVALUA SIEMPRE DE IZQUIERDA A DERECHA SI EL PRIMERO ES TRUE YA NO MIRA EL RESTO DEL CÓDIGO
EJEMPLO

true && true || fase && true
AQUI TE DICE QUE ES TRUE PORQUE LO QUE HAY A LA IZQUIERDA ES TRUE Y YA NO CALCULA EL RESTO DE ELEMENTOS AUNQUE SEAN FALSE
*/

