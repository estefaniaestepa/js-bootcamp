
// ----------------------------- TIPOS DE FUNCIONES -----------------------------------

// ·········· 1. FUNCIONES DECLARATIVAS  ·········· 
// Consiste en declarar la función con un nombre y sus parámetros de entrada entre paréntesis. 

function suma (a, b) {
    return a + b;
}

suma(1, 2) // ----> retorna 1 + 2 = 3


// ·········· 2. EXPRESIONES DE FUNCIONES ·········· 
// Las expresiones de funciones son funciones asignadas a variables. A diferencia de las funciones declarativas, estas no se cargan hasta que el intérprete alcanza la línea de código donde están definidas.

const resta1 = function (a, b) {
    return a - b;
}

resta(5, 6) // invocamos a la variable que contiene la función. ----> retorna 5 - 6 = 1


// ·········· 3. FUNCIONES DE FLECHA  ·········· 
// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones. 

// Diferencias y limitaciones:
/* 
1. No tiene sus propios enlaces a this o super y no se debe usar como métodos.
2. No tiene argumentos o palabras clave new.target.
3. No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
4. No se puede utilizar como constructor.
5. No se puede utilizar yield dentro de su cuerpo.
 */

const multiplicacion = (a, b) => a * b;

// guardamos la función dentro de la variable, sin embargo no hace falta que pongamos la palabra function, directamente declaramos los parámetros. nos ahorramos también abrir corchetes y poner el return, todo eso lo sustituímos por => que incluye el return del resultado de lo que haya después de la flechita. 



//  ·········· 4. FUNCIONES ANÓNIMAS ·········· 
// Las funciones anónimas son funciones sin un nombre asignado. Se pueden asignar a variables o utilizarse directamente como argumentos para otras funciones.

let greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};
 
greet();

// También podemos hacerlo con función de flecha

var greet1 = () =>
{
    console.log("Welcome to GeeksforGeeks!");
};
 
greet();


  
//  ·········· 5. FUNCIONES AUTOEJECUTABLES   ·········· 
// Si ponemos una función entre paréntesis hacemos que se ejecute inmediatamente después de ser definidas. 

(function() {
    console.log("Esta función se ejecuta automáticamente.");
  })();

// al final llamamos a la misma función al cerrar los paréntesis que la incluyen. ()



// ·········· 6. FUNCIONES CALLBACK ·········· 
// JavaScript ejecuta el código secuencialmente en orden descendente. Sin embargo, hay algunos casos en los que el código se ejecuta (o debe ejecutarse) después de que ocurra otra cosa y también de forma no secuencial. Esto se llama programación asíncrona.
// Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.
// En JavaScript, la forma de crear una función callback es pasándola como parámetro a otra función, y luego llamarla de vuelta justo después de que haya ocurrido algo o se haya completado alguna tarea.
// https://www.freecodecamp.org/espanol/news/funciones-callback-en-javascript-que-son-los-callback-en-js-y-como-usarlos/
// ----- EXPLICA MUY BIEN CONCEPTOS CALLBACK --------

function saludar(nombre) {
    alert("Hola " + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar);

// ponemos "callback" en parámetros como podemos poner "llamamosAFuncion".



// ·········· 7. FUNCIONES RECURSIVAS ·········· 
// Las funciones recursivas son aquellas que se llaman a sí mismas durante su ejecución. Pueden ser útiles para problemas que pueden dividirse en subproblemas más pequeños. 
// https://www.freecodecamp.org/espanol/news/como-entender-recursividad-en-javascript/


let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1

1// La entrada actual es 5
2// Es 5 igual a 0 ?
3// No, Ok entonces imprime 5 en la consola.
4// Se llama asi misma de nuevo con el numero - 1 O 5 - 1;
5// La entrada principal es 4
6// Es 4 igual a 0 ?
7// No, Ok entonces imprime 4 en la consola.
8// Repite hasta que la entrada sea 0, y asi la función deja de llamarse a si misma.



// ·········· 8. FUNCIONES DE ORDEN SUPERIOR ·········· 
// Funciones que toman otras funciones como argumentos o devuelven funciones.
// MI NO TERMINAR DE ENTENDER ESTE CONCEPTO, ASÍ QUE UNA VEZ LO ENTIENDA HAREMOS RESUMEN

// En este código, estás utilizando funciones flecha (=>) para definir las funciones operacion, suma, y resta, y luego estás demostrando cómo puedes utilizar la función operacion para realizar operaciones diferentes según una función de callback proporcionada. Aquí está una explicación paso a paso:

// 1. Definición de una función de orden superior:
const operacion = (a, b, callback) => callback(a,b);
// En este ejemplo 'operación' es una función de orden superior porque toma tres parámetros: a, b y callback.
// Calback es una función que se pasa como argumento a operación

// 2. Definición de funciones callback:
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
// suma y resta son funciones que realizan operaciones específicas, en este caso, la suma y la resta de dos números.

//3. Uso de la función de orden superior:
console.log(operacion(5, 3, suma));
console.log(operacion(5, 3, resta));
// se utiliza la función 'operación' para realizar diferentes operaciones según la función de callback proporcionada.
// En el primer caso 'suma' es el callback, por lo que 'operacion' realiza la suma de 5 y 3 resultando 8
// En el segundo caso 'resta' es el callback, por lo que operacion realiza la resta de 5 y 3, resultando en 2



// ·········· 9. CONSTRUCTOR DE FUNCIONES ·········· 
// El constructor de funciones crea una nueva función a partir de una cadena de texto que representa el cuerpo de la función. Se utiliza raramente debido a posibles riesgos de seguridad y a su complejidad.

const multiplicar = new Function('a', 'b', 'return a * b'); 
// new function crea una nueva función. Los parámetros de la función son especificados como cadenas de texto. En este caso, las cadenas 'a', 'b' representan los nombres de los parámetros, y la cadena 'return a * b' representa el cuerpo de la función.
console.log(multiplicar(2, 3)); 
// la función multiplicar se llama con los argumentos 2 y 3, la función devuelve el resultado de la multiplicación que es 6
