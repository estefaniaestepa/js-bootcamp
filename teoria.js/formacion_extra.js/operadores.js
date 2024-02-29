
// ·········· 1. OPERADORES DE ASIGNACIÓN ·········· 
// Un operador de asignación asigna un valor a su operando izquiero basándose en el valor de su operando derecho.

/* Asignación */	x = y	// x = y
/* Asignación de adición */	x += y	// x = x + y
/* Asignación de resta */	x -= y	// x = x - y
/* Asignación de multiplicación */	x *= y	// x = x * y
/* Asignación de división */	x /= y	// x = x / y
/* Asignación de residuo */	x %= y	// x = x % y
/* Asignación de exponenciación */	x **= y	// x = x ** y



// ·········· 2. OPERADORES DE COMPARACIÓN ·········· 
// Compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera o falsa.

/* Igual (==)	Devuelve true si los operandos son iguales. */	
3 == var1
"3" == var1
3 == '3'
/* No es igual (!=)	Devuelve true si los operandos no son iguales. */	
var1 != 4
var2 != "3"
/* Estrictamente igual (===)	Devuelve true si los operandos son iguales y del mismo tipo. */
3 === var1
/* Desigualdad estricta (!==)	Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.	 */
var1 !== "3"
3 !== '3'
/* Mayor que (>)	Devuelve true si el operando izquierdo es mayor que el operando derecho. */	
var2 > var1 
"12" > 2
/* Mayor o igual que (>=)	Devuelve true si el operando izquierdo es mayor o igual que el operando derecho. */	
var2 >= var1 
var1 >= 3
/* Menor que (<)	Devuelve true si el operando izquierdo es menor que el operando derecho. */	
var1 < var2
"2" < 12
/* Menor o igual (<=)	Devuelve true si el operando izquierdo es menor o igual que el operando derecho. */	
var1 <= var2 
var2 <= 5



// ·········· 3. OPERADORES ARITMÉTICOS ·········· 
// Toma valores númericos como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma +, resta -, multiplicación *, y división /.

/* Residuo (%)	Operador binario. Devuelve el resto entero de dividir los dos operandos. */
/* 12 % 5 devuelve 2. */

/* Incremento (++)	Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.	 */
/* Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y , solo entonces, establece x en 4. */

/* Decremento (--)	Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.	Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2. */

/* Negación unaria (-)	Operador unario. Devuelve la negación de su operando.	Si x es 3, entonces -x devuelve -3. */

/* Positivo unario (+)	Operador unario. Intenta convertir el operando en un número, si aún no lo es.	+"3" devuelve 3. +true devuelve 1. */
/* Operador de exponenciación (**)	Calcula la base a la potencia de exponente, es decir, baseexponente	2 ** 3 returns 8. 10 ** -1 returns 0.1. */



// ·········· 4. OPERADORES LÓGICOS ·········· 
// Los operadores lógicos se utilizan normalmente con valores booleanos.

/* AND Lógico (&&)	expr1 && expr2.	Devuelve expr1 si se puede convertir a false; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, && devuelve true si ambos operandos son true; de lo contrario, devuelve false. */

/* OR lógico (||)	expr1 || expr2	Devuelve expr1 si se puede convertir a true; de lo contrario, devuelve expr2. Por lo tanto, cuando se usa con valores booleanos, || devuelve true si alguno de los operandos es true; si ambos son falsos, devuelve false. */

/* NOT lógico (!)	!expr	Devuelve false si su único operando se puede convertir a true; de lo contrario, devuelve true. */

var a1 = true && true; // t && t devuelve true
var a2 = true && false; // t && f devuelve false
var a3 = false && true; // f && t devuelve false
var a4 = false && 3 == 4; // f && f devuelve false
var a5 = "Cat" && "Dog"; // t && t devuelve Dog
var a6 = false && "Cat"; // f && t devuelve false
var a7 = "Cat" && false; // t && f devuelve false

var o1 = true || true; // t || t devuelve true
var o2 = false || true; // f || t devuelve true
var o3 = true || false; // t || f devuelve true
var o4 = false || 3 == 4; // f || f devuelve false
var o5 = "Cat" || "Dog"; // t || t devuelve Cat
var o6 = false || "Cat"; // f || t devuelve Cat
var o7 = "Cat" || false; // t || f devuelve Cat

var n1 = !true; // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !"Cat"; // !t devuelve false




// ·········· 5. OPERADOR CONDICIONAL ·········· 
// El operador condicional es el único operador que toma TRES OPERANDOS. El operador puede tener uno de dos valores según una condición: condition ? val1 : val2
// Si condition es true coge el valor de val1, si es fals usa el valor de val2

var status = age >= 18 ? "adult" : "menor";

// si age es mayor o igual a 18 devuelve "adult", si no devuelve "menor".




https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators