/* OPERADORES
Los operadores sirven para inteactuar variables entre ellas y sacar resultados */

/* Asignación: ya los hemos visto anteriormente. Es el igual (=). Asignan datos a variables.
Lógicos: actúan sobre booleanos. Devuelven un booleano como resultado.
Aritméticos: realizan operaciones aridmeticas (suma, resta, multiplicación y division)
Comparativos: compara datos. Devuelve un booleano. */

/* ---------------------------------------------------------------------------------- */

/* OPERADORES LOGICOS

-OR (||): Se cumple si alguna de las variables es true
const tengoEfectivo = true;
const tengoTargeta = false;
const puedoPagar = tengoEfectivo || tengoTargeta;  (TRUE, porque una de las dos se cumple)


-AND (&&): se cumple si todas las variables son true
const tengoDinero= true;
const hayStrock= true;
const puedoComprar = tengoDinero && hayStrock; (TRUE , se cumple si trodas son verderas)


NOT (!): Invierte el valor de esa variable
const verdadero= true;
const falso= false;
!verdadero //false
!falso // true
*/

/* ---------------------------------------------------------------------------------- */

/* OPERADORES ARIDMETICOS 1
const suma= num1 + num2;
const resta= num1 - num2;
const multiplicacion= num1 * num2;
const division= num1 / num2;  EJ: 1/2 =0.5
const resto= num1 % num2;   Es el resto de la division ElementInternals, también se le llama modulo EJ: 1%2 =1  porque no puede dividir 1%2 de forma entera
const exponenete= num1 ** num2; 
 */

/* ---------------------------------------------------------------------------------- */

/* OPERADORES ARIDMETICOS 2
Operacion y asignacion (con constantes los operadores de asignacion no funcionan)*/

let val1 = 1; 
val1 +=2; //suma 2 a val1 y guardalo en val1
val1 -= 2; //resta 2 a val1 y guardalo en val1
val1 *= 2; // multiplica por 2 a val1 y guardalo en val1
val1 /= 2; //divide por 2 a val1 y guardalo en val1
val1 %= 2; // calcula el resto de la dividion entera de val1 y guardalo en val1
val1++; //dame el valor de val1 y sumale 1 (EJ : let b = 2;  //  b++ nos dira 2 // si le preguntamos que vale b nos dice 3) PORQUE PRIMERO ME HA DADO LO QUE VALE B Y LUEGO HACE LA SUMA
val1--; //dame el valor de val1 y restale 1
++val1; //suma 1 a val1 y damelo (aqui hace directamente la suma EJ: let b = 2;  // b++ nos dira directamente que vale 3)
--val1; //resta 1 a val1 y damelo

/* ---------------------------------------------------------------------------------- */

/* COMPARADORES COMPARATIVOS : IGUALDAD */
const igualdad = ( 1== '1'); //TRUE cuando los operamos son iguales
const igualdadEstricta = ( 1===1);  //TRUE cuando los operamos son iguales y tienen el mismo tipo
const desigualdad = (0 != '0');  // TRUE cuando los operadores son desiguales
const mayorQue = (2 > 1);  //TRUE cuando el primer operador es mayor que el segundo operado
const mayorOIgualQue = (2 >= 2);  //TRUE cuando el primer operador es mayor o igual que el segundo operado
const menorQue = (1 < 2);  // TRUE cuando el primer operador es menor que el segundo operado
const menorOIgualQue = (2 <= 2);  // TRUE cuando el primer operador es menor o igual que el segundo operado


/* JS INTERPRETA QUE TRUE VALE 1 Y FALSE 0 */



