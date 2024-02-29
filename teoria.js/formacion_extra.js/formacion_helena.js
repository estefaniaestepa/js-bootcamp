// ------------------------- WHILE -------------------------------------

while(/* condición de parada*/ true) {
    /** Si no se cumple la condición de parada salta a la siguiente línea */
    console.log('Hola');
    a++;

    if (a === 3) {
        break;                  /** Se usa para romper el bucle */
    }
}

while (a !== 3) {
    a += 2;                     /** Bucle infinito que nunca pasará por 3. HAY QUE TENER CUIDADO CON ESTO */
}

while (false) {
    console.log('Hola');        /** Nunca se va a ejecutar el bucle porque su condición es false. */
}

do {
    console.log('Hola');        /** Aunque la condición de while sea false, do se va a ejecutar 1 vez. */
} while (false);


/** -------------------- CONTADOR CON WHILE --------------------------- */

let a = 1; // Variable contadora

while (a !== 15 /** Condición de parada */) {
    console.log('Mensaje');
    a += 2; // Sumador

    if (a === 15) {
        continue; // Bucle infinito porque cuando llega a 15 le dice que se salte la condición de parada y sigue sumando, haciendo así que no vuelva a aparecer 15 y sea infinito.
    }
}


/** -------------------- CONTADOR CON FOR -------------------- */

for (let a = 2 /** Variable contadora */; a < 15 /** Condición de parada */; a += 2 /** Sumador */) {
    console.log('Mensaje');
}


/** -------------------- BUCLE INFINITO CON TRUE -------------------- */

while (true) {
    console.log('Soy infinito');
}


/** -------------------- BUCLE INFINITO CON FOR -------------------- */

for (let a = 2 /** Variable contadora */; true /** Condición de parada */; a += 2 /** Sumador */) {
    console.log('Mensaje');
    // break;               /** hay que añadirle un break a un bucle infinito si o si, sino no deja de ejecutarse */
}

for(;;) {               /** Bucle infinito de FOR */

}

/** -------------------- ARRAYS -------------------- */ /**Conjunto de datos identificados por índices. El índice determina la posición dentro de la lista. */

//         0  1  2  3
const b = [1, 2, 3, 4];
b[/** Índice que queremos acceder */ 1];    

//         0   1      2
const c = [1, true, 'Hola'];  /** Son heterogeneos, pueden contener: números, strings, booleanos ... */

c.push(1, 2, 3, 4, 5, 6); // c = [1, true, 'Hola',1, 2, 3, 4, 5, 6]  ¡¡¡¡ METE elementos al FINAL del array. !!!!
const valor /* 'Hola' */ = c.pop(); // c = [1, true]   ¡¡¡¡ QUITA el ULTIMO elemento del array. !!!!
const sublista /* [1, true] */ = c.slice(0 /**POSICIÓN DESDE DONDE QUIERES COPIAR */, 2/** CUANTOS DATOS QUIERES COPIAR */); // Crea una copia, no modifica el original
const numeroDeElementosEnLista /* 3 */ = c.length;  // Nos dice cuantos elementos hay en el array
const texto /* "1|true|Hola" */ = c.join('|'); // Convierte la lista en string y lo separa con algo específico (preterminado lo separa por ,).
const subtexto /* "1|true" */ = c.slice(0, 2).join('|'); 
const elementosEliminados /* [true, 'Hola'] */ = c.splice(1, 2, 'Hola2', 'Hola3'); /* c = [1, ''Hola2', 'Hola3']; */ //El primer parametro(1) determina la posición, el segundo (2) los elementos que queremos eliminar, y a partir de ahí que elementos queremos añadir. Podemos no añadir nada.
c.splice(1, 0, 'Hola1', 'Hola2', true); /* c = [1, 'Hola1', 'Hola2', true, true, 'Hola'] */ //
const primerElemento /** 1 */ = c.shift(); /** c = [true, 'Hola'] */ //ELIMINA el primer elemento del array.
c.unshift(1, 2, 3, 4); /** c = [1, 2, 3, 4, 1, true, 'Hola'] */ //AÑADE elementos al principio del array.
c.reverse(); /** c = ['Hola', true, 1] */ //MODIFICA el array original y gira el orden de los elementos
c.sort(); // c = [ 1, 'Hola', true ] // MODIFICA el array original y ordena según su lógica el array. COMPROBAR SIEMPRE COMO LO ORDENA para ver si nos interesa o no.

const d = [1, 2, 10, 20, 2, 3];
d.sort(); /** c = [ 1, 10, 2, 20, 3 ] */ // Ordena 'alfabéticamente' // ESTA ESTÁ ORDENADA SEGÚN LA LÓGICA DE JS
d.sort(function(a, b) {             //LE CREAMOS UNA FUNCIÓN PARA QUE LO ORDENE DE FORMA NUMERICA CONSECUTIVA. FUNCIÓN COMPARADORA
    if (a < b) {                    //Recive dos números (a y b) y así lo va a comparar los dos números
        return -1;                  // Si a < b tiene que devolver numero negativo
    }
    if (a === b) {                  // Si son iguales devuelve 0
        return 0;
    }
    if (a > b) {                    //Si a > b devuelve numero positivo
        return 1;
    }
}); /** c = [ 1, 2, 3, 10, 20 ] */
const newArray /** [1, 2, 10, 20, 3, 1, true, 'Hola'] */ = d.concat(c);  //concatena añadiendo los elemenos de c en d.
const indice /* 1 */ = d.indexOf(2); // Primera posición del elemento especificado en parámetros
const indice2 /* 4 */ = d.lastIndexOf(2); // Última posición del elemento especificado en parámetros
const existe /** true */ = d.includes(2); // Si existe o no el elemento especificado en parámetros
const existe2 /** false */ = d.includes('Coca cola');

//----------------- BUCLE PARA CONTAR CUANTAS VECES HAY X NÚMERO -------------
const numero = prompt('Número'); // numero = 2 (especificado por usuario)

let veces = 0;

for (let i = 0; i < d.length; i++) {
    if (d[i] === numero) {   //numero se cambia por el número introducido por el usuario y recorre el bucle
        veces++             // cada vez que el bucle pase por encima del número, suma 1 al contador "vecces"
    }
}

console.log(`Aparece ${veces} veces`); // Aparece 2 veces
console.log('Aparece ' + veces + ' veces'); // Aparece 2 veces

// String
const texto1 = 'Hola';
const lista /** ['H', 'o', 'l', 'a'] */ = texto1.split(''); //Separa los elementos del array con el separador especificado en parametros
const frase = 'Soy un genio de JS';
const lista2 /** ['Soy', 'un', 'genio', 'de', 'JS'] */ = frase.split(' ');
const perro = 'p-e-r-r-o';
const perro2 /** ['p', 'e', 'r', 'r', 'o'] */= perro.split('-');
const perro3 /** perro */ = perro2.join('');

// Condicionales
/// IF 
const valor1 = prompt('Dame un número');

if (valor1 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
}

/// IF...else
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor2 es par
} else {
    // Qué se ejecuta si valor2 NO es par
    console.log('Es impar');
}

/// IF...else if...else
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
} else if (valor2 % 3 === 0) {
    console.log('Es divisible entre 3');
} else {
    // Qué se ejecuta si valor2 NO es par
    console.log('Es impar');
}

// Varias respuestas
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
}

if (valor2 % 4 === 0) {
    console.log('Divisible entre 4');
} else {
    console.log('No es divisible entre 4');
}

/// Objetos  //Determinado por {} y compuestos por claves(color) y valores(rojo)
const character = {name: 'Jack Sparrow', age: 10, color: 'rojo'}; 
character.name // Accedemos a name (Jack Sparrow)
character['name'] // Accedemos a name (Jack Sparrow )
character.trabajo = 'no'; // Añadir datos al objeto
character.age = 25; // Modificar valor
delete character.age; // Eliminar propiedad del objeto

const character2 = character; // REFERENCIA!, copia el objeto principal y lo modifica ya que ambos apuntan a lo mismo
character2.age = 10; // character.age = 10
character2.patas = 'Si'; // character.patas = 'Si'

const client = {name: 'Ivan'};
const client2 = {name: 'Pepe'};

const clients = [
    {name: 'Ivan'}, {name: 'Pepe'}
]; // listado de clientes

clients.push({name: 'Ana'});
clients[0].name = 'Manuel'; // const clients = [{name: 'Manuel'}, {name: 'Pepe'}, {name: 'Ana'}];


// --------------------------------------- FUNCIONES ---------------------------------------
//Trozo de código que metemos dentro de un elemento que automatizaremos. línea de código que se va a repetir x numero de veces. 


function y /* Nombre de la función */(x /** Parámetros */) {                 
    return 2 * x + 2; /** Valor de retorno */                           //hará la operación con el valor que se le asigne a x y lo devuelve
}

const variable = y(1); // equivalente al cuerpo de la función: 2 * 1 + 2     //Llamamos a la funcion y, asignamos (1) al parámetro (x) y retorna 2*1+2
const variable2 = y(20); // 2 * 20 + 2                                       // guardando la función dentro de la vairable
const variable3 = y(300); // 2 * 300 + 2

/*
const cliente = [
    {name: 'Ivan'}, {name: 'Pepe'}
]; // listado de clientes
*/

function imprimirListadoDeNombres(clientes) {                           //Creamos una variable que va a almacenar un array con los objetos
    for (let i = 0; i < clientes.length; i++) {                         //creamos el bucle que iteres sobre esa variable y la recorra
        const cliente = clientes[i];                                    //queremos el nombre del objeto
                                                                        
        console.log(cliente.name);                                      //vamos a imprimir el nombre del cliente
    }                                                                   // no necesita un RETURN porque le ponemos el console.log
}

imprimirListadoDeNombres(cliente);                                      // una vez la función está declarada solo hace falta llamarla para que se ejecute y darle
                                                                        // el parámetro que queremos utilizar, en este caso la variable cliente con la lista de 
                                                                        // objetos 

function saluda() {                                                     // Cada vez que inovquemos la función saluda, imprime Hola.
    console.log('Hola');
}

// ----------------------- EJEMPLO PRÁCTICO DE FUNCIÓN --------------------------------------

/* Has hecho una compra y sabes el precio del producto y su iva. Haz una función que te calcule el precio total que vas a pagar por tu compra. Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el iva y dividir por 100. */

function calculaIva(precio){                               // en parámetros le ponemos lo que va a recibir, en este caso el precio sobre el que queremos iterar
    return precio + (precio * 25 / 100);                                    //creamos la función y le damos como nombre lo que hace
   }                                                                        // le ponemos los cálculos que queremos que haga y que nos devuelva el resultado


calculaIva(100);
calculaIva(200);

/// ---------------------------- Valor por defecto en funciones ------------------------------

function saluda(name = 'Juan Gabriel de todos los santos') {
    console.log(`Hola ${name}, ¿Qué tal?`);
}

const nombres = ['Iván', 'Manuel', 'Paloma', 'Ana', undefined];

for (let i = 0; i < nombres.length; i++) {
    saluda(nombres[i]);
}

nombres.join();

// ----------------------------------- HOISTING -----------------------------------------

console.log (a, c);                             // El hoisitng es basicamente cuando le pedimos al código que imprima o ejectue algo que aún no hemos declarado.
                                                
var j = 1;                                      // En este ejemplo le pedimos que imprima a, c sin embargo declaramos la variable después de su imprimación, por lo  
                                                // tanto js no sabe que valores tiene hasta que llega a la líne de código donde están declaradas.
console.log (a, c);                            //Es por eso que le asigna un valor preterminado de UNDEFINED ya que no sabe que valor tienen dichas variables. 


function b() {                                 // HOISTING SOLO EXISTE SI DECLARAMOS VARIABLES CON VAR!!!!!!!!!!!!!!!!!!!!!
    console.log (c);

    var c = 1;
    console.log(c);
}

console.log (a, c);



/// ------------------------------------ Closures - Funciones dentro de funciones -----------------------------------

function operar(a) {                       // Función principal que contiene funciones auxilares. Dentro de operar le podemos especificar que tipo de operación.
    function suma(b) {
        return a + b;
    }

    function resta(b) {
        return a - b;
    }

    function mul(b) {
        return a * b;
    }

    return {
        suma,                           // Si la variable y la clave se llaman igual, puedes solo poner el nombre de la variable.
        resta, 
        mul
    };
}

console.log(operar(1).suma(2));
console.log(operar(2).mul(3));

/// --------------------------------------------- OBJETOS AVANZADOS ---------------------------------------

const cliente = {                                             
    id: 32,
    name: 'Ivan',
    secondName: 'Ceballos',
    age: 12,
    address: 'Calle Virgen del Carmen',
    getFullname: function() {                                    // Creamos la función dentro del objeto para que solo itere sobre él.
        return this.name + ' ' + this.secondName;                // Usamos "this" para que reconozca que los datos que le pedimos están dentro del mismo objeto.
        //return `${this.name} ${this.secondName}`;                 
    }                                                            // En este caso la usamos para abstraer datos, no reeutilizarlos. 
};

console.log(cliente.name); // Ivan
console.log(cliente.getFullname()); //Ivan Ceballos



function generarCliente(id, name, sec, age, address) {                         // Generar cliente temporal con parámetros de id, nombre y apellido
    let tempClient = {};                                         // Creamos una nueva variable que va a contener los datos introducidos por el cliente
    Object.assign(tempClient, cliente);                          // Copiamos dentro de tempClient los valores de cliente 

    tempClient.name = name;                                      // Le decimos que valor tiene cada parámetro dentro del objeto
    tempClient.id = id;                                          
    tempClient.secondName = sec;
    tempClient.age = age;
    tempClient.address = address;

    return tempClient;
    
}

const nuevoCliente = generarCliente(2, 'Helena', 'Marti', 28, 'Visca Jafre');  //Para imprimir los datos necesitamos declarar otra variable donde guardarlos
console.log(nuevoCliente)



let cliente2 = {};                                               // Generamos variable que contiene objeto vacío
Object.assign(cliente2, cliente);                                // Copiamos dentro de cliente2 los valores de cliente

cliente2.name = 'Alfredo';                                       // Modificamos el nombre dentro de cliente2 a Alfredo
cliente2.getFullname();                                          // Invocamos la función dentro de cliente2

console.log(cliente2.name); //Alfredo (lo hemos modificado antes)                                        
console.log(cliente2.getFullname()); //Alfredo Cerballos (solo hemos modificado el nombre, no el apellido ni demás datos)


