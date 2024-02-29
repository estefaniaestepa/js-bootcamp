/*
- while 
- do...while  (ES UNA VARIANTE DEL WILE)
- for
*/

//let a = 2;

/*BLUCLE WHILE, GENERALMENTE WHILE SE USA PARA TODO Y EL FOR NORMALMENTE PARA CONTAR COSAS */

while(/* condición de parada*/ true) {  /*PONEMOS TRUE PARA QUE NO DE ERROR*/
    /** Qué pasa si no se cumple la condición de parada */
    console.log('Hola');       /*EN ESTE CASO COMO NO HAY CONDICION DE PARADA, QUE PARA CUANDO ESTO SEA FALSE POR LO QUE SERIA INFINITO*/
    a++; 

    if (a === 3) {          /*NOS IMPRIME 3 VECES HOLA*/
        break;              /*ESTO ES LO QUE SE UTILIZA PARA PARAR BUCLES*/
    }
}

while (a !== 3) {           /*ESTO SERÍA LO MISMO EN ESTE CASO MENOR O DISTINTO DARIA LO MISMO*/
   a += 2;                 /*AQUI PONEMOS LA CONCION DE DOS PARA QUE SEA DISTINTO POR 3*/
}


/********************BUCLE DO WHILE************************************************************************************ */

/*BUCLE DO WHILE, SE EJECUTA AL MENOS UNA SOLA VEZ
 LA DIFERENCIA CON WHILE QUE SE EJECUTA DE 0 A N VECES*/

while (false) {           /*SI AQUI INDICAMOS UN FALSE NUNCA SE EJECUTARIA*/
    console.log('Hola');
}

do {
    console.log('Hola');
} while (false);          /*ESTO SI QUE SE EJECUTA AL MENOS UNA VEZ


/********************BUCLE WHILE************************************************************************************ */


/*BUCLE WHILE CON CONDICIÓN DE CONTADOR COMO SI FUESE UN FOR*/
// Contador
/// Con while
let a = 1;              // Variable contadora

while (a !== 15/** Condición de parada */) {
    console.log('Mensaje');
    a += 2;            // Sumador

    if (a === 15) {
        continue;       // Bucle infinito porque salta la condición de parada
    }
}


/************************BUCLES FOR******************************************************************************** */


/*BUCLES FOR: SE DIVIDE EN 3 PARTES*/
/// Con for
for (let a = 2 /** Variable contadora */; a < 15 /** Condición de parada */; a += 2 /** Sumador */) {
    console.log('Mensaje');
}
/* TODO LO QUE ESTÉ DENTRO DEL FOR AFECTA AL FOR*/
/* i HACE LA CONDICION DE INDICE, SI USAMOS UN SEGUNDO FOR UTILIZARIAMOS j*/


/*****************CONTADOR DE INFINITO: WHILE*************************************************************************************** */


/*CONTADOR DE INFINITO*/


/*WHILE CON CONTADOR INFINITO, LO PODEMOS USAR POR EJEMPLO EN UN MENU PARA QUE SE EJECUTE AL MENOS UNA SOLA VEZ*/

// Infinito
/// Con while
while (true) {                             /*PARA QUE SEA INFINITO NO LE TENEMOS QUE PONER CONDICION DE PARADA, UN TRUE ES INFINITO; 1===1 ES TRUE*/
    console.log('Soy infinito');          /*SI PONEMOS FALSE NUNCA SE MOSTRARIA*/
}
/*EN ESTE PASO POR DEFECTO ES TRUE
/* A UN BUCLE INFINITO DEBEMOS PONERLE EL BRAKE*/


/*BUCLE INFINITO CON FOR*/
/// Con for
for (let a = 2 /** Variable contadora */; true /** Condición de parada */; a += 2 /** Sumador */) {
    console.log('Mensaje');
    // break; /*SI NO PONEMOS EL BRAKE SERÍA INFINITO TIENE QUE ESTAR DENTRO DEL FOR*/
}

/* for(;;) ESTO SERÍA LO MISMO QUE UN BUCLE INFINITO */ 


/*VARIANTE DEL BRAKE, (EL BRAKE PARA ) Y EL CONTINUE SALTA UN PASO, 
HAY QUE TENER CUIDADO PORQUE EL PASO QUE PODEMOS SALTARNOS ES EL BRAKE 
VEAMOS UN EJEMPLO:
 if (a === 15) {
        continue; // Bucle infinito porque salta la condición de parada
    }*/


/****************ARRAYS**************************************************************************************** */

/*ARRAYS : LOS ARRAYS SON ETEROGENEOS Y PUEDEN TENER DISTINTOS VALORES (TEXTO, NUMERO, OBJETO*/
// Array
//         0  1  2  3
const b = [1, 2, 3, 4];
b[/** Índice que queremos acceder */ 1];

//         0   1      2
const c = [1, true, 'Hola'];


/*METODOS DE LOS ARRAYS*/

c.push(1, 2, 3, 4, 5, 6); // c = [1, true, 'Hola',1, 2, 3, 4, 5, 6]
const valor /* 'Hola' */ = c.pop(); // c = [1, true]
const sublista /* [1, true] */ = c.slice(0, 2); // Crea una copia, no modifica el original
const numeroDeElementosEnLista /* 3 */ = c.length;
const texto /* "1|true|Hola" */ = c.join('|');
const subtexto /* "1|true" */ = c.slice(0, 2).join('|');
const elementosEliminados /* [true, 'Hola'] */ = c.splice(1, 2, 'Hola2', 'Hola3'); /* c = [1, ''Hola2', 'Hola3']; */
c.splice(1, 0, 'Hola1', 'Hola2', true); /* c = [1, 'Hola1', 'Hola2', true, true, 'Hola'] */
const primerElemento /** 1 */ = c.shift(); /** c = [true, 'Hola'] */
c.unshift(1, 2, 3, 4); /** c = [1, 2, 3, 4, 1, true, 'Hola'] */
c.reverse(); /** c = ['Hola', true, 1] */
c.sort(); // c = [ 1, 'Hola', true ]
const newArray /** [1, 2, 10, 20, 3, 1, true, 'Hola'] */ = d.concat(c);
const indice /* 1 */ = d.indexOf(2); // Primera posición del elemento
const indice2 /* 4 */ = d.lastIndexOf(2); // Última posición del elemento
const existe /** true */ = d.includes(2); // Si existe o no
const existe2 /** false */ = d.includes('Coca cola');

// String
const texto1 = 'Hola'; 
const lista /* ['H', 'o', 'l', 'a'] */ = texto1.split('');
const frase = 'Soy un genio de JS';
const lista2 /* ['Soy', 'un', 'genio', 'de', 'JS'] */ = frase.split(' ');
const perro = 'p-e-r-r-o';
const perro2 /* ['p', 'e', 'r', 'r', 'o'] */= perro.split('-');
const perro3 /* perro */ = perro2.join('');


/***************FUNCION DE COMPARACION***************************************************************************************** */


/*FUNCION DE COMPARACION*/

const d = [1, 2, 10, 20, 2, 3];
d.sort(); /** c = [ 1, 10, 2, 20, 3 ] */ // Ordena 'alfabéticamente'
d.sort(function(a, b) {
    if (a < b) {                  /*ESTAS FUNCIONES COMPARAN ENTRE DOS NUMEROS , COMPARA EL 1 CON EL RESTO DE NUMEROS POSIBLES Y MIRA DONDE QUEDARIA EL 1*/
        return -1;
    }
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
}); /** c = [ 1, 2, 3, 10, 20 ] */ /*

/*VEREMOS UN EJEMPLO DE COMO ORDENA ESTA FUNCION Y COMO HACE LA COMPARACIÓN ENTRE DOS NUMEROS
const d = [1, 2, 10, 20, 2, 3];
VEREMOS COMO ORDENA LOS NUMEROS A (VA A LA IZQUIERDA) Y B (A LA DERECHA)

a:2, b:1,resultado 1
a:2, b:2,resultado 0
a:10, b:2,resultado 1 //2 es menor que el 10 por lo tanto irá antes que el 10
a:20, b:10,resultado 1
a:3, b:20,resultado -1
a:3, b:10,resultado -1

NEGATIVO IMPLICA QUE A VA ANTES QUE B
POSITIVO B ANTES QUE A
CERO NOS DA IGUAL LA POSICION
*/


/******************************************************************************************************** */


/*PARA SABER CUANTAS VECES SE REPITE UN ELEMENTO EN UN ARRAY */

// Veces que existe un elemento

const numero = prompt('Número');           // numero = 10 ESTE CASO ES CUANDO EL USUARIO NOS INDICA UN NUMERO

let veces = 0;                             // PONEMOS UNA VARIABLE QUE CUENTE LAS VECES

for (let i = 0; i < d.length; i++) {       //ITERAMOS SOBRE TODO EL ARRAY CADA UNO DE LOS ELEMENTOS
    if (d[i] === numero) {                //SI ESTE VALOR ES NUESTRO VALOR BUSCADO
        veces++                          //SUMAMOS 1 AL NUMERO DE VECES QUE APARECE
    }
}

console.log(`Aparece ${veces} veces`);        // Aparece 2 veces FORMA DE CONCATENAR
console.log('Aparece ' + veces + ' veces');   // Aparece 2 veces


/******************************************************************************************************** */


// CONDICIONALES ESTABLECE UNA CONDICION, UN CODIGO QUE SE EJECUTA SI SE ESTABLECE UNA CONDICION (VALORES BOOLEANOS)

/// IF 
/* GENERALMENTE CUANDO PONEMOS IF SON VALORES CALCULADOS, CUANDO DECIMOS < O > NOS DEVUELVE UN BOOLEANO true o false
EJEMPLO
const valor: 2;
if(valor > 1)
*/


const valor1 = prompt('Dame un número');

if (valor1 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) { /*SI VALOR 1, MODULO % 2 (RESTO DE LA DIVISION ENTERA (%2 ESTO QUIERE DECIR QUE SI EL NUMERO ES PAR)*/
    console.log('Es par');
    // Que pasa si valor1 es par
}


/// IF...else
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) {
    console.log('Es par');
    // Que pasa si valor1 es par
} else {                          /*ELSE QUIERE DECIR OTRA COSA QUE SE EJECUTA SI VALOR2 NO ES PAR(en este caso)*/
    // Qué se ejecuta si valor2 NO es par
    console.log('Es impar');
}


/// IF...else if...else SE PUEDEN CONCATENAR TODOS LOS QUE QUERAMOS
const valor2 = prompt('Dame un número');

if (valor2 % 2 === 0 /** Condicional siempre tiene que devolver un booleano */) { /*VA EN ORDEN DESCENTE SI NO SE CUMPLE LA PRIMERA PASA, SI SE CUMPLE NOS DIRIA LA RESPUESTA Es par'*/
    console.log('Es par');
    // Que pasa si valor1 es par
} else if (valor2 % 3 === 0) {                 //EN ELSE IF EN EL MOMENTO QUE SE EJECUTA UNA DE LAS CONDIONES NO SE EJECUTA LAS DEMAS (ELSE IF ES SOLO QUE AÑADE OTRA CONDCION SE TIENE QUE CUMPLIR UNO U OTRO)
    console.log('Es divisible entre 3');
} else {                                     //EL ELSE SIEMPRE SE CONCATENA AL FINAL
    // Qué se ejecuta si valor2 NO es par
    console.log('Es impar');
}


// Varias respuestas ESTO SIGNIFICA QUE YA NO ES NO ES UN SOLO IF (PONES VARIOS IF)

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
/*EN ESTE CASI SI TENEMOS UN NUMERO QUE SEA PAR Y SEA DIVISIBLE ENTRE 4 NOSTRARIA LAS DOS FUNCIONES
SON CONDICIONES AISLADAS Y SI NO SE CUMPLE NO SE MUESTRA NADA (A NO SER QUE TENGAMOS UN ELSE PARA LO QUE NO SE CUMPLA)
 Y SI SE CUMPLE ALGINA MUESTRA LA QUE SE CUMPLA*/


/*******************OBJETOS************************************************************************************* */


/// OBJETOS: ES UN CONJUNTO ORDENADO DE DATOS , PORQUE ESTA ORDENADO POR UNA CLAVE Y ESTA ORDENADO POR UN CONJUNTO DE DATOS

const character = {trabajo: 'no', name: 'Jack Sparrow', age: 10, color: 'rojo'}; //NAME (VALOR) 'JACK SPARROW' (OBJETO)
/*COMO ACCEDEMOS A LOS VALORES:
character.name //'Jack Sparrow'
character['name'] //'Jack Sparrow' */

character.trabajo = 'no';          // Añadir datos // SI NO TENEMOS ESTE ELEMENTO LO LLAMAMOS ASI Y AÑADIMOS ELEMENTOS
character.age = 25;               // Sobreescribir valor // ASI SE MODIFICAN DATOS DE LOS OBJETOS
delete character.age;            // Eliminar propiedad // ESTO HACE QUE DESAPAREZCA LA PROPIEDAD

const character2 = character;   // REFERENCIA! ESTA REFERENCIA ES PARA DUPLICAR PORQUE ASI REFERENCIA AL MISMO SITIO
character2.age = 10;           // character.age = 10
character2.patas = 'Si';       // character.patas = 'Si' // SI AÑADIMMOS UN ELEMENTO EN character2 EN character TAMBIEN LO AÑADE

const client = {name: 'Ivan'};
const client2 = {name: 'Pepe'};

const clients = [              //PODEMOS TENER UN ARRAY CON VARIOS CLIENTES
    {name: 'Ivan'}, {name: 'Pepe'}
]; // listado de clientes

clients.push({name: 'Ana'});        //CON ESTO AÑADIMOS OTRO CLIENTE
clients[0].name = 'Manuel';         // const clients = [{name: 'Manuel'}, {name: 'Pepe'}, {name: 'Ana'}];


/*****************FUNCIONES *************************************************************************************** */


/* FUNCIONES 

- LAS FUNCIONES ES UN TROZO DE CODIGO QUE NOSOTROS METEMOS EN UN ELEMENTO QUE AUTOMATIZAREMOS
UNA FUNCION ES UNA ABTRACCION DE CODIGO, TEMEMOS UNA LINEA DE CODIGO QUE VAMOS A REPETIR N VECES O VAMOS A NECESITAR USARLO N VECES (que vamos a repetir mucho) 
*/

function y /* Nombre de la función SE PUEDE LLAMAR COMO QUERAMOS */(x /** Parámetros (VALOR DE LA VARIABLE) TENEMOS UNA VARIABLE QUE SE LLAMA X Y NO SABEMOS EL VALOR(NOS DA IGUAL*/) {
    return 2 * x + 2;          /** Valor de retorno  ESTO ES LO QUE DEVUELVE (EL RETURN DEVUELVE EL DATO A LA SALIDA Y ESTO LO PODEMOS MOSTRAR EN EL console.log */
}
/*ENTRAN UNOS PARAMETROS EN LAS FUNCIONES Y SALEN UNOS DATOS, SON COMO UNA CAJA NEGRA NO SABEMOS COMO ESTA IMPLEMENTADO PERO SABEMOS QUE HACE UNA COSA
LAS FUNCIONES SOLO PUEDEN HACER UNA COSA, TIENEN QUE SER CONCRETAS PARA UNA ACCION EN CONCRETO */

/*AQUI LA EJECUTAMOS 3 VECES Y NO ES NECESARIO ESCRIBIR LOS CODIGOS 3 VECES*/
const variable = y(1);           // equivalente al cuerpo de la función: 2 * 1 + 2 /*AQUI LLAMAMOS A X Y CAMBIAMOS EL VALOR*/
const variable2 = y(20);        // 2 * 20 + 2
const variable3 = y(300);      // 2 * 300 + 2


/*************/


/*
const clients = [
    {name: 'Ivan'}, {name: 'Pepe'}
]; // listado de clientes
*/

function imprimirListadoDeNombres/*nombre de la funcion */(clientes/*esto es la variable - parametros NO ES OBIGATORIO*/) { //LAS FUNCIONES NORMALMENTE SE ESCRIBEN CON UN VERBO DE INICIO, PORQUE LAS FUNCIONES EQUIVALEN A ACCIONES
    /*cuerpo de la funcion*/
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];        //de esta iteracion queremos el nombre del objeto

        console.log(cliente.name);         //esta funcion no necesita un return  porque hemos hecho un console.log solo es para verlos
    }
    return;            //valor de retorno de la función NO ES OBLIGATORIO
}

imprimirListadoDeNombres(clients); 
imprimirListadoDeNombres(clients2);          //ESTO ES UNA REFERENCIA PARA QUE CUANDO ENTRE EN LA FUNCION RECIBIRA EL ARRAY, LO LLEVAMOS A LA FUNCION PARA NO TENER QUE REPETIR EL CODIGO


/*************/


function saluda(){           //AQUI ES EL EJEMPLO DE QUE NO HAY PARAMETROS NI DEVUELVE NADA
    console.log('Hola');
}


/*************/


//LA IDEA DE LAS FUNCIONES ES ABSTRAER CODIGO O FUNCIONALIDAD

/*EJEMPLO DE UNA FUNCION PARA CALCULAR IVA:

function calculaIva(precio){
    return precio + (precio * 0.21);

}
calculaIva(100);
calculaIva(200):

esto si en un futuro cambia el iva del 21 al 25 no tenemos que cambiar nada 


/*****VALOR POR DEFECTO EN FUNCIONES********/


/// Valor por defecto en funciones

function saluda(name = 'Juan Gabriel de todos los santos') {          //'Juan Gabriel de todos los santos' ESTO ES UN DATO QUE PODEMOS PONER CUANDO NOS LLEGA UN VALOR QUE NO ES NADA (undefined) ESTO ES UN VALOR POR DEFECTO
    console.log(`Hola ${name}, ¿Qué tal?`);                          //AQUI NOS SALUDA A CADA PERSONA 
}

const nombres = ['Iván', 'Manuel', 'Paloma', 'Ana', undefined];

for (let i = 0; i < nombres.length; i++) {                       //LA VARIABLE i ES EL INDICE QUE RECORRE EL ARRAY
    saluda(nombres[i]);                                         //AQUI SALUDAMOS A TODOS LOS NOMBRES
}

nombres.join();                          //ESTE ELEMENTO .join ES UN SEPARADOR QUE LO SEPARA POR , (comas) y los cambia por string ESTO QUITA LOS undefined
// se puede personalizar el .join  // console.log(.join(nombres, '@')); // me pone el @ delante de los nombres


/******HOISTING*******/


/// funciones hoisting EL HOISTING ES UN TIPO DE ERROR Y SOLO EXISTE SI SE USA VAR DENTRO DE LAS FUNCIONES CUYO VALOR NO HA SIDO ASIGNADO
/*determina que el valor de una variable declarada con var puede subir al principio del scope de la función dentro de la que está declarada. Esto puede ser peligroso, 
porque puedes terminar con un valor de tipo undefined a pesar de haberle otorgado valor a tus variables.*/

console.log(aa/* , c */);                 //tenemos que quitar la c para que nos funcione

var aa= 1;
console.log(a, c);

function b(){
    console.log(c);

    var c;
    c= 1; //este var si que funciona dentro de la declaracion de este b, el hoisting de c solo actua dentro de este ambito
    console.log(c);

}
console.log(aa/* , c */);                 //tenemos que quitar la c para que nos funcione


/******CLOUSURES*******/


/// CLOUSURES - FUNCIONES DENTRO DE FUNCIONES-
function operar(a) {                 // Clousures que devuelve varias funciones, DENTRO DE ESTA FUNCION CREAMOS OTRA FUNCION
    function suma(b) { 
        return a + b;               // LA FUNCION SUMA RETORNA A+B Y SUMMA DOS NUMEROS //PODEMOS TENER COMO UNA LIBRERIA DE FUNCIONES
    }

    function resta(b) {
        return a - b;
    }

    function mul(b) {
        return a * b;
    }

    function pinta(){

        console.log(a);
    }

    return {
        suma,                 //PODEMOS LLAMAR ASI LA CLAVE SI SE LLAMA IGUAL QUE LA VARIABLE (nombre,)
        resta, 
        mul,
        pinta
    };
} 

const operacion = operar(1);                  // esto lo podemos guardar en una variable. ESTO NOS DEVUELVE UN OBJETO QUE SON VARIAS FUNCIONES

const suma = operacion.suma(2);
const resta = operacion.resta(1);
const multi = operacion.mul(4);             // PODEMOS REALIZAR MULTIPLES OPERACIONES SOBRE ESTE ELEMENTO // asignamos los valores para las funciones sin tener la necesidad de repetir la variable a


console.log(operar(2).mul(3));
console.log(operar(1).suma(2)); 
console.log(operar(1).pinta());


/******EJEMPLO: *******/
//VEREMOS EL EJEMPLO DE ARRIBA DE OTRA FORMA:
/* CLOUSURES  PODEMOS TENER MEMORIA (PODEMOS TENER UNA FUNCION QUE TENGA MEMORIA Y QUE GUARDE UN START)
SE PUEDEN REALIZAR VARIAS OPERACIONES Y NOS PINTE EL RESULTADO */

function operar(a) { 
    let resultado = a;
    function suma(b) { 
      resultado += b; 
    }

    function resta(b) {
        resultado -= b;
    }

    function mul(b) {
        resultado *= b;
    }

    function pinta(){
        console.log(resultado);
    }

    return {
        suma,               //PODEMOS LLAMAR ASI LA CLAVE SI SE LLAMA IGUAL QUE LA VARIABLE (nombre,)
        resta, 
        mul,
        pinta
    };
} 

const operacion = operar(1); // esto lo podemos guardar en una variable. ESTO NOS DEVUELVE UN OBJETO QUE SON VARIAS FUNCIONES

operacion.suma(2); //esto ya no nos lo va a retornar, simplemente realizamos operaciones
operacion.resta(1);
operacion.mul(4); 


/******CLOUSURES EJEMPLO CALCULADORA:*******/


//CLOUSURES: LA MEMORIA ES MUY UTIL PARA LAS CALCULADORAS, VAMOS A VER UN EJEMPLO:
//VEREMOS EL EJEMPLO DE UNA CALCULADORA LOS Closures PUEDEN TENER UNA MEMORIA INTERNA DE LA FUNCION PARA QUE PODAMOS CALCULAR CON ELLA

function calculadora(valorInicial) {
    let resultado = valorInicial;                    // CALCULA CON Memoria interna LAS OPERACIONES (sobre este resultado actua)
    console.log('Valor inicial', valorInicial);

    function suma(b) {
        console.log('Sumo', b);
        resultado += b;
        console.log('Total:', resultado);
    }

    function resta(b) {
        console.log('Resto', b);
        resultado -= b;
        console.log('Total:', resultado);
    }

    function mul(b) {
        console.log('Multiplico', b);
        resultado *= b;
        console.log('Total:', resultado);
    }

    function pinta() {
        console.log(resultado);
    }

    return {
        suma,
        resta,
        mul,
        pinta,
    };
};

const calc = calculadora(2);          //lo inicializamos una vez

calc.suma(2);                        //aqui llamamos a la funcion  y esta funcion actua sobre el resultado de arriba interno
calc.resta(3);
calc.mul(4);
calc.pinta();


/******CLOUSURES: *******/


//CLOUSURES : QUE DEVUELVEN UNA SOLA FUNCION

function saludador(nombre){
    return function (nombre){
console.log(`Hola ${nombre}, soy ${nombre}`);
    }
}

const persona = saludador("Ivan");            //aqui es como si digamos que nos identificamos en la plataforma
persona('Juan');                             //PERSONA ES UNA FUNCION , PORQUE ESTO DEVUELVE UNA FUNCION -vamos saludando personas que pasan por una puerta
persona('Helena'); 
persona('Antonio');                          //esto es una manera de no repetir parametros


/*************************************OBJETOS AVANZADOS******************************************************************* */


// OBJETOS AVANZADOS: 
/* LOS OBJETOS CONTIENEN PROPIEDADES COMO :(NOMBRE, EDAD, DIRECCION) PARA ACCEDER PONEMOS EL NOMNRE: 
COMO SE DECLARAN FUNCIONES DENTRO DE LOS OBJETOS */

const cliente = { //ESTO SERIA COMO UN TEMPLATE CLIENTE
    id: 32,
    name: 'Ivan',
    secondName: 'Ceballos',
    age: 12,
    address: 'Calle Virgen del Carmen',
    getFullname: function() {                         //PONEMOS EL NOMBRE QUE DEBE EMPEZAR POR UN VERBO PORQUE ES UNA FUNCION, Y COMO LE HEMOS PUESTO EL NOMBRE ANTES YA NO HACE FALTA PONERLO EN LA FUNCION
        return this.name + ' ' + this.secondName;     //THIS DENTRO DE UNA FUNCION QUE ESTA DENTRO DE UN OBJETO SIRVE PARA REFERENCIAR A ESE MISMO OBJETO, DE TAL MANERA QUE THIS NAME.
    }
};

//console.log(cliente.getFullname); LA FUNCION getFullname: (SOLO EXISTE DENTRO DE ESE OBJETO)


//EJEMPLO DE FUNCION DE OBJETOS AVANZADOS: esto es una plantilla para crear clientes
function generarCliente(id, name, sec) {
    let tempClient = {};                       // esto es la plantilla
    Object.assign(tempClient, cliente);       //PARA COPIAR COPIAR OBJETOS UTILIZAREMOS LA FUNCION Object.assign SOBRE UN OBJETO TEMPORAL

    tempClient.name = name;                  //SEGUN EL TEMPLATE GENERAMOS USUARIOS Y TENER UNA FUNCION DENTRO getFullname: function() QUE NOS DEVUELVA EL NOMBRE ENTERO   return this.name + ' ' + this.secondName;
    tempClient.id = id;
    tempClient.secondName = sec;

    return tempClient;                     //con esto tenemos un cliente temporal
}

let cliente2;
Object.assign(a, cliente);                //cliente2 tendria que tener las mismas caracteristicas 

cliente2.name = 'Alfredo';
cliente2.getFullname(); 

console.log(cliente.name);
console.log(cliente.getFullname());


/*****OBJETO DENTRO DE FUNCIONES ********/


//EJEMPLO :OBJETOS DENTRO DE FUNCIONES

const name = 'Alejandro';                // COMO LA FUNCION ESTA FUERA DE ESTE OBJETO A LA FUNCION LE TENEMOS QUE PONER UN NOMBRE

const objeto3 = {
    name: 'Roberto',
    nuestrameNombre: function(){       // SI UNA PROPIEDAD ES UNA FUNCION, PONEMOS EL NOMBRE DE LA FUNCION : function() SIN EL NOMBRE PORQUE LO TENEMOS ARRIBA        console.log(this.name) // me sacará roberto
    console.log(this.name);           //PONEMOS this.name PORQUE TENEMOS OTRA VARIABLE CON ESE NOMBRE
    }
};

const objeto4 = {
    name: 'Juan',
    nuestrameNombre: function(){ 
    console.log(this.name);
    }
};

objeto3.muestraNombre();


/********************************PROPIEDADES CALCULADAS************************************************************************ */


// PROPIEDADES CALCULADAS
const clave = 'Hola';             //ES ACCEDER Y GENERAR UNA CLAVE DE UN OBJETO A TRVÉS DE UNA VARIABLE
const objeto = {
    [clave]: '3',                //LA CLAVE LA PONEMOS [], PORUQE ESTE OBJETO DEPENDENDE DE LA VARIABLE
};

const valor3 = objeto[clave] // Accedemos mediante el valor de esa variable


/*******************************BUCLES ************************************************************************* */

//BUCLES 
/*BUCLES AVANZADOS QUE NOS PERMITEN HACER APLICACIONES SIN TENER EN CUENTA CIERTAS VARIABLES QUE INTERNAMENTE SE CUMPLEN
Y NOS PERMITE TENER APLICACIONES MAS SENCILLAS */


// BUCLES REMIX - 

const lista1 = [1, 2, 3, 4, 5];         // EN LAS LISTAS DE NORMAL SOLEMOS INDICE (I) - AQUI COGE LAS POSICIONES
const objeto1 = {                      //Y EN LOS OBJETOS (CLAVES)
    nombre: 'Juan',
    apellido: 'Gonzalez',
    direccion: 'Calle Antonio López',
};

console.log('nombre' in objeto1); // Saber si un objeto tiene una propiedad . ESTO DARIA TRUE


/*****BUCLES FOR IN ********/

//BUCLES FOR IN 
/// For in - coger las claves rec6rre
console.groupCollapsed('For-in');

for (let i in lista1) {
    if (i === 2) {
        console.log(i, lista1[i]);
    }
}

console.log(1 in lista1);            // Esto es equivalente a hacer 2 < lista1.length, es decir, la posición existe en lista1

for (let clave in objeto1) {        //aqui indicamos dame todas las claves de este objeto
    console.log('-', clave, ':', objeto1[clave]);                //clave:nombre, apellido, direccion - valor de la clave objeto1:juan, gonzalez, calle antonio lopez
}

console.groupEnd();

//BUCLES REMIX - CON ESTOS NO ES NECESARIO RECORRER UN INDICE PARA RECORRER UN ARRAY //ESTA ESTRUCCTURA SÓLO EXISTE EN JS


/*****FOR IN********/

//BUCLE FOR IN  

//TRABAJA SOBRE CLAVES
/*(coger las claves  de los elementos que estamos pasando) SIRVE TANTO PARA LISTAS COMO OBJETOS
Lo mas normal es que un forin itera sobre un array que use la variable i*/

/// For in - //ESTO SOLO SIRVE PARA ELEMENTOS SUCESIVOS, in comprueba si el elemento existe
console.groupCollapsed('For-in');
for (let i /*nombre de la variable= i*/ in lista1 /*nombre de la variable de nuesto array(esto hace un a funcion de contador automática internamente) */) { //ESTA FORMA ES PARA COGER LAS CLAVES, clave contendrá cada uno de los indices de este elemento(podemos llamarlo i)
    if(i % 2 === 0)                 //con esto sacamos los numeros pares
    console.log(i, lista1[i]); 
}

for (let clave in objeto1) {               //LOS OBJETOS ESTAN DIVIDADES EN CLAVES Y VALORES (AQUI PODEMOS ITERAR POR LAS CLAVES Y VALORES)
    console.log(clave, objeto1[clave]);
}
console.groupEnd();

////////////////////////////LA MEJOR FORMA DE TRABAJAR UNA CLAVE EN OBJETOS////////////////////////////////////
for (let key in objeto1) {                  //SI VEMOS KEY SABEMOS QUE ES UN OBJETO, SI VEMOS OTRO NOMBRE DE NORMAL ESTAMOS TRABAJANDO EN UNA LISTA
    console.log(key, objeto1[key]);
}
console.groupEnd();

/****FOR IN*********/


/// FOR IN - coger las claves SON LAS POSICIONES DEL ARRAY 
console.groupCollapsed('For-in');                      //.groupCollapsed lo que hace en la consola que sea un grupo(lo pone como en una seccion)

for (let i in lista1) {
    //if(i % 2 === 0) //cuando no sabemos si el elemento es 2, sabemos que es divisible entre dos, es decir que sea par. Tendremos n elementos que van a ser calculados
    if (i === 2) {
        console.log(i, lista1[i]);                     //solo con esta manera podemos moficar los valores
    }
}

console.log(1 in lista1);                      // Esto es equivalente a hacer 2 < lista1.length, es decir, la posición existe en lista1

//console.log("usuario:");
for (let key in objeto1) {
    //objeto1[key] = objeto1[key] + "Hola"; //aqui estamos añadiendo a todas las propiedades un Hola, esto no se suele aplicar
    console.log('-', key, ':', objeto1[key]);
}

console.groupEnd();                  //fin de la agrupacion - todo lo que este hasta aqui se agrupa, esto es para tener informacion ordenada y estruccturada


/****BUCLES FOR OF*********/


//BUCLES FOR OF

//TRABAJA VALORES - NOS DA LOS VALORES (UTIL PARA UNA COPIA O LEER LOS VALORES DE UNA LISTA)
//(SOLO SIRVE PARA LISTAS NO SIRVE PARA OBJETOS, LO QUE HACE ES DARME VALORES DIRECTOS DE TODOS LOS ELEMENTOS)
/// FOR OF - directamente coger los valores, SACA LOS DATOS DEL ARRAY (Pero no se puede modificar los elementos de la lista, solo nos da el valor)
console.groupCollapsed('For of')  // Agrupación de resultados en la consola
for (let valor of lista1) { //ESTO SIRVE PARA LOS ARRAYS, NO SIRVE PARA LOS OBJETOS
        // Cuerpo (1)
    console.log(valor);
}

for (let valor of objeto1) {
   // valor = 1; //esto no va a modificar la lista original porque esto es una variable let dentro de la lista, que contiene el valor del elemento que estamos iterando en este momento. Es una variable local
    console.log(valor); //esto no modifica nada solo puedes ver los valores de la lista
}


 //ESTO SERIA LO MISMO QUE ESTO: // con esto tambien se podría modificar los valores
 for(let i = 0; i< lista.length; i++){
    const valor = lista[i];
     // Cuerpo (1)
 }
 
console.log(lista1);

console.groupEnd();              // Fin de la agrupación de resultados


/******OPERACION CON FOR OF*******/

//AQUI HACEMOS UNA OPERACION CON EL FOR OF 

/// const lista1 = [1, 2, 3, 4, 5];
// 1
const lista4 = [];                  //copia de lista1 que se llame lista4, que tenga los elementos de lista1 multiplicado *2

for (let value of lista1) {        // con el for of sólo trabajamos valores, nos olvidamos de los indices. Sólo queremos los valores
    if(value === 3){              //si quieramos omitir el valor 3 en un array (es un 3 de valor no de posicion)
    continue;                    // saltara el valor y seguirá iterando . Esto aplica a todos los bucles
    brake;                      // para la lista en cuanto encuentra un 3 . Esto aplica a todos los bucles
    }
    lista4.push(value * 2);    //  iteramos la lista y lo mostramos multiplicado por 2
}

console.log(lista4);
// end 1

// 1 EQUIVALENTE A ESTO, sería lo mismo 
const lista3 = [];

for (let i = 0; i < lista1.length; i++) {
    lista3.push(lista1[i] * 2);
}

console.log(lista3);
// end equivalencia 1


/************************FUNCIONES REMIX******************************************************************************** */


// FUNCIONES REMIX : ANÓNIMAS Y DE FLECHA

//A LAS FUNCIONES NO LES AFECTA LOS AMBITOS, pero esto sirve para encapsular codugo de una variable dentro de una funcion

/// FUNCIONES ANÓNIMAS : SON FUNCIONES QUE SE DECLARAN O SE EJECUTAN SIN NOMBRE
// PORQUE LAS LLAMAMOS FUNCIONES ANONIMAS, PORQUE LA FUNCION NO TIENE NOMBRE, EL NOMBRE LO DA LA VARIABLE DE DONDE LO VAMOS A METER

/***************EJEMPLO: 1 FUNCIONES NOOO ANONIMAS************/

let funcion = funcion(){        // aqui al ser una variable podemos cambiarlo 
    console.log("Hola");
}
funcion = 1;                 // aqui cambiamos el valor de la funcion , nos dira que no es una funcion


/***************EJEMPLO: 2 NOOO ANONIMAS************/


function funcion(){             // este nombre de la funcion (funcion) estaróa ocupado y no podemos tener otra variable que se llame funcion
    console.log("Hola");
    }
{
    function a() {            //aunque esta funcion esta dentro de este ambito la podemos llamar fuera
        console.log('Hola');
    }
}
    a(); //lo odemos llamar fuera del ambito y se ejecuta


/************* FUNCIONES ANÓNIMAS*************** */
//NOS SIRVE PARA ENCAPSULAR CODIGO 


const b = 1 ; // podemos crear una variable y la llamamos fuera b(); tendremos el valor de b. Pero dentro del ambito tendremos otro valor

{ //esto es un ambito
    function a() {                        //aunque esta funcion esta dentro de este ambito la podemos llamar fuera
        console.log('Hola desde a');
    }

    const b = function () {             // esto no lo podemos llamar fuera porque es una variable dentro del ambito, no es una funcion
        console.log('Hola desde b');
    }

    b();                             // la podemos llamar dentro pero no la podemos llamar fuera. Solo esta definido dentro de este ambito
}

a();
b(); // No tengo acceso desde fuera del ámbito


{/***********EJEMPLO ACCESO USUARIOS: PARA DECLARAR FUNCIONES EN AMBITOS***************** */

const data =[];
function C() {         // SOLO TIENE ACCESO EL USUARIO A ESTA FUNCION QUE ES LA QUE INICIALIZA Y ESTA LO HACE TODO                     
 // coger datos del servidor
 //guardar en data
 //firtrar data por permiso de usuario
 //mostrar datos filtrados
 //TODOS ESTAS OPERACIONES EL USUARIO NO TIENE ACCESO, TODO ESTO ESTA DENTRO DE ESTE AMBITO QUE EL USUARIO DESDE FUERA NO TIENE ACCESO
}

const getAllData = function () {             
    console.log('Hola desde c');
}
const filterData =funcion(){

}
C();
}


/************* FUNCIONES REMIX*************** */


// FUNCIONES REMIX
//SON FUNCIONES ANONIMAS QUE DE FORMA ABREVIADA EN UNA LINEA HACEN UNA COSA DIRECTA

/// ARROW FUNCTION - UNA MANERA ABREVIADA DE ESCRIBIR FUNCIONES

const suma /** nombre de la funcion */ = function (a, b /** parametros */) {   //FUNCION ANONIMA PORQUE EL NOMBRE VA FUERA Y NO DENTRO DE LA FUNCION
    return a + b;             // Valor de retorno
}

/******ARROW FUNCTION : FUNCIONES DE FLECHA (DEVUELVEN ALGO INMEDIATO******** */

//    nombre          param    return(resultado)
const sumaAbreviado = (a, b) => a + b;            //esto es un tipo de funcion anonima, el lo mismo que lo de arriba. Tiene que ir dentro de un ambito. NO SE TIENE PORQUE ESCRIBIR EL NOMBRE FUNCTION PORQUE EQUIVALE A LA =>

// Es obligatorio que los arrow functions devuelvan algo - LAS FUNCIONES DE FLECHA SIRVEN PARA QUE DEVUELVAN ALGO
console.log(suma(1, 2));
console.log(sumaAbreviado(1, 2));


/******FUNCION INMEDIATA ******** */


const saludaLargo = function (nombre) {          //esto es lo mismo que lo de abajo
    return `Hola, ${nombre}`;
}

const saluda = (nombre) => `Hola, ${nombre}`;    //esta funcion es equivalente a lo de arriba

console.log(saluda('Manuel'));


/******NO DEBEMOS USARLO******** */


const calculaOperacion = (a, b, c) => { // Versión larga de arrow function, no debemos usarlo
    // Cosa - SI ABRIMOS LAS LLAVES QUIERE DECIR QUE VAMOS A PONER MUCHAS COSAS
    // Cosa
    return 'Hola';         //SI ABRIMOS LLAVES ES OBLIGARIO PONER RETUN, SI NO PONEMOS LLAVES NO ES OBLIGATORIO
}
