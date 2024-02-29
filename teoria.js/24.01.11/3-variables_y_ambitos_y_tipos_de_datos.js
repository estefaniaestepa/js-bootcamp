/* VARIABLES
Las variables deben ser descriptivas y sus nombres deben ser claros y concisos
cuando la variable es larga se escribiria de la siguiente manera (numerOfTicks) en camercase, generalmente se escribe los nombres en ingles */

/* ---------------------------------------------------------------------------------- */

/* VARIABLE GLOBAL VAR 
 Genera una variable de ámbito global.
Se declara con la palabra reservada var y un nombre con un valor (opcional).

var a = 1; 
*/

/* ---------------------------------------------------------------------------------- */

/* VARIABLE LOCAL LET
Genera una variable de ámbito local o ambito concreto.
Se declara con la palabra reservada let y un nombre con un valor (opcional).

let b = 2;
*/

/* ---------------------------------------------------------------------------------- */

/* DIFERENCIA ENTRE LET Y VAR CON UN EJEMPLO */
var a = 1;
/* var b = 2; esto es lo que interpreta js*/
{
  {
    let c = 3; /*c puede trabajar dentro de este ambito pero fuera no*/
    {
      var b = 2; /*aqui seria así b= 2; */
    }
  }
}
console.log ({a, b}); /*si imprimimos esto podemos ver a y b a pesar de que b esta dentro de 3 ambitos, en teorioa no deberia ser accesible, que pasa que internamente para js es como si creasemos la variable fuera de los ambitos*/
console.log ({a, b, c});





/* ---------------------------------------------------------------------------------- */

/* CONSTANTE (CONST)
Es una variable constante y su valor no cambiará en toda la ejecución del código.
Necesita ser inicializada con un valor.
Se declara con la palabra reservada const y un nombre con un valor.
Es la que se recomienda si no vamos a cambiar el valor de la variable nunca. En este caso c siempre será 3 (dentro de su ámbito).

const c = 3;
*/

/* ---------------------------------------------------------------------------------- */

/* AMBITOS
Un ámbito es un fragmento de código aislado de lo que hay fuera de él.
Se declara con unas llaves ("{" y "}")
Lo que hay dentro del código puede interaccionar con el ámbito superior pero no viceversa. Las variables trabajan dentro de ese ambito pero no fuera
Siempre hay un ámbito inicial que se llama ámbito global.
Dentro del ámbito se pueden redeclarar variables y constantes, pero siempre con el mismo formato que en el ámbito superior.

var a = 1;
let b =2;
const c = 3;

{
var a = 1; 
let b = 2;
const c = 4;
const d= 3;
console.log('Dentro del ambito', {a, b, c, d});
}

console.log('Fuera del ambito', {a, b, c});
*/


/* ---------------------------------------------------------------------------------- */

/* TIPOS DE DATOS QUE PUEDE LLEVAR UNA VARIABLE
-Las variables pueden contener los siguientes tipos de datos:
Simples
String
Number
Boolean
Null
Undefined

-Complejos (conjunto finito de datos)
Object
Array */

/* ---------------------------------------------------------------------------------- */

/* String
let texto = 'Hola , soy un texto';  por estandar se usan las comillas ' '
una menera de decirle a js que es una variable (let a= 3;) 'Hola a vale, ${a}' 
texto = ' '; tambien puede estar vacío
const texto
var texto
*/

/* ---------------------------------------------------------------------------------- */

/* Number
let num = 1; numero positivo
num= -1;
num= 1.5 numero decimal
num= -1.5 numero decimal negativo
num= 1e10; numero exponencial 
*/

/* ---------------------------------------------------------------------------------- */
/* Boolean
let bool = true; verdadero
bool = false; falso 
*/

/* ---------------------------------------------------------------------------------- */

/* Null
let nulo = null; ausencia de valor, cuando algo es nada es nulo (null)
 */

/* ---------------------------------------------------------------------------------- */

/* undefined
let noDefinido; ausencia de definicion. Cuando declaramos una variable y no le ponemos valor, su valor por defecto va a ser undefined, es decir ese valor no ha sido definido
console.log(noDefinido); 
*/


