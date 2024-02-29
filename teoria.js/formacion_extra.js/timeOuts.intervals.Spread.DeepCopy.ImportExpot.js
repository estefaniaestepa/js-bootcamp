
// API -- es como un servidor de donde sacamos información


/*
---------------------------------------------------------- TIME OUTS ----------------------------------------------------------------


serTimeout() establece un temporizador que ejecuta una función o una porción de código después de que transcurra el tiempo indicado en los parámetros
función que ejecuta algo dentro de x milisegundos

recive dos parámetros*/

const timeoutID = setTimeout ( /* *Handler* */ () => {  /* HANDLER--- fucnión que ejecutará algo cuando se termine el tiempo especificado */
    // Que haré pasado ese tiempo
    console.log('Hola mundo!');
} /*Tiempo  (ms)*/, 1000);

clearTimeout(timeoutID);  // limpia el contador, resetea el contador. 

/* Imaginamos que estás haciendo una transición en el banco y le das a "cerrar sesión", ahí se activa el setTimeout y te da un contador de 5 segundos, te aparece el mensaje de "estás seguro de que quieres cerrar sesión?" y tienes dos opciones, aceptar o cancelar. Ambos botones activan el clearTimeout así que cancelan el contador de setTimeout y la acción pasa a ser inmediata.
*/

//cuando una funcion se llama a si misma se llama recrusividad o recrusividad no me acuerdo de lo que ha dicho exactamente



//------------------------ CHATGPT SAYS ----------------------------------------

// Es una función que se utiliza para ejecutar una determinada función después de que haya transcurrido un cierto período de tiempo. 
// --- EJEMPLO ----
function miFuncion () {
    console.log("Hola mundo!");
}

setTimeout(miFuncion, 2000) // Llamar a la función después de 2000 milisegundos 
// La función miFuncion se ejecutará después de que hayan pasado 2000 milisegundos desde que se llamó a setTimeout. 


// --------------------------------------------- INTERVALS -----------------------------------------------------------------------------
// intervalo, cada x tiempo hace algo de forma infinita. Time Out se ejecuta una vez mientras que Intervals se ejecuta infinitamente si no lo paras.
// setInteval ya incluye la función de repetirse a si mismo.
// time out está pensado para retrasar una acción, es decir quiero que barras el suelo dentro de 5 segundos, mientras que el interval hace que se ejecute CADA 5 segundos.
// es decir, time out = en 3 segundos vas a morir, interval = mueres cada 3 segundos.
// SI NO ESPECIFICAMOS EL TIEMPO se ejecuta constantemente, hace funcinción de bucle while.


let i = 0;
let intervalID2 = null;

intervalID2 = setInterval( () => {
    if( i === 3) {
        clearInterval(intervalID2);  // es necesario pararlo manualmente sino no para nunca
    }else {
        console.log('Hola mundo!');
        i++;
    }
} , 3000);

// -------------------------------------------------

const intervalID = setInterval (/* Handler */ () => {
    console.log('Intervalo')
}, /* Tiempo (ms) */ 1000);

clearInterval(intervalID);




// ------------------------------------------------ SPREAD OPERATOR ----------------------------------------------------------------

//Son los ... (tres puntitos). Sirve para hacer clonar arrays y objetos y modificarlos

// ------------------------------------------------ SPREAD DE ARRAYS -----------------------------------------------------------------

const listado = [1, 2, 3, 4];
const [uno1, dos2, tres3, cuatro4] = listado;

const listadoCopia = [...listado] // Copia normal
const listadoMasElementosPrincipio = [1, 2, 3, ...listado] //Añado 3 números al principio y copio listado
const listadoMasElementosFinal = [...listado, 1, 2, 3]; // Copio listado y añado elementos al final


// ------------------------------------------------ SPREAD DE OBJETOS -----------------------------------------------------------------

const client = {
    name: 'Victor',
    surname: 'Castillos'
}

const clientCopy = {...client} // Clona el objeto
const clientExtend = {...client, address: 'Calle del Ciervo 17'}; // Añadir una propiedad extra a la copia
const clientModified = {...client, name: 'Ivan'}; // Copia y MODIFICA un dato. Orden factores! Primero copia y luego encuentra que le añadimos otro name, así que lo modifica
const clientModified2 = {name: 'Iván', ...client}; // Copia el objeto y prevalece el dato en cliente (general). Si no hay nombre añade 'Iván', si el objeto clonado tiene nombre no modifica ni añade el nombre que le añades. QUIERO QUE CLIENTE TENGA EL NOMBRE IVÁN EN CASO QUE NO TENGA YA UN NOMBRE DECLARADO. Si tiene nombre declarado NO LO MODIFICA.
//Se usa en casos de datos preterminados, es decir imagina que un cliente rellena un formulario pero no pone su nombre, entonces haríamos esto dandole el valor "sinNombre" al nombre. Ya que el cliente no ha 
// proporcionado su nombre por lo tanto el valor está vacío se añadiría el que nosotros declaramos.

// ------------------------------------------------ LISTADO/OBJETOS COMPLEJOS -------------------------------------------------------------

const lista = [
    {
        name: 'Victor',
        surname: 'Castillos',
    },
    {
        name: 'Carlos',
        surname: 'Castillos',
    },
    {
        name: 'Francisco',
        surname: 'Castillos',
    },

];

const clon = {...lista[1], addres: 'Calle Ciervo 17'} // coge el elemento en posición 1 (Carlos Castillos), lo clona y le añade la dirección.

const copiaLista1 = [...lista];
console.log(copiaLista1); // Devuelve una copia de la lista

copiaLista1[0].name = 'Juan Carlos';
console.log(copiaLista1); // Ha modificado el primer nombre a Juan Carlos EN LAS DOS LISTAS, LA ORIGINAL Y LA COPIA
// porque lo que copiamos con ... son las referencias entonces ambas son la misma

const copiaLista1 = []; // PARA QUE NO MODIFIQUE AMBAS COPIAS LO HACEMOS CON UN FOR

for (let val of lista) {
    copiaLista1.push({...val}) // hacemos una copia profunda de val para que haga una copia del ELEMENTO y no de la REFERENCIA
}

copiaLista1[0].name = 'Juan Carlos';
console.log(copiaLista1);         // Aquí solo ha modificado el valor en la copia
console.log('Es la misma referencia?', copiaLista1[0] === lista[0]) // NO TIENEN LA MISMA REFERENCIA ya que esto es una COPIA PROFUNDA

// ------------------------------------------------ COPIA PROFUNDA (DEEP COPY) -------------------------------------------------------------

const objeto2 = {
    address: {
        street: 'Calle del Ciervo',
        num: 1,
        cp: '228528',
    },
    name: 'Carlos',
    surname: 'Fernandez',
};

// Copia mal hecha

const objetoCopia2 = {...objeto2};
objetoCopia2.address.street = 'Calle Virgen del Milagro'; // hace una copia superficial, por tanto va a cambiar LAS DOS

console.log('Copia', objetoCopia2);
console.log('Original', objeto2);
console.log('Es la misma referencia?', objeto2.address === objetoCopia2.address)

// Copia bien hecha (deep copy)

const objetoCopia2 = {...objeto2, address: {...objeto2.address}}; // copia profunda. hay que meter en el nuevo array la copia del elemento
objetoCopia2.address.street = 'Calle Virgen del Milagro';

console.log('Copia', objetoCopia2);
console.log('Original', objeto2);
console.log('Es la misma referencia?', objeto2.address === objetoCopia2.address)


// ------------------------------------------------ DESESTRUCTURACIÓN -------------------------------------------------------------

// De listados

const listado2 = [1, 2, 3, 4]; // queremos sacar este listado, en cuatro variables
const [uno, dos, tres, cuatro] = listado2; // queremos que salga así
// posicionalmente le asignamos a la varibale un dato del array
// es lo mismo que crear 4 variables diferentes y asignarles el valor del elemento que hay en el array de arriba.
// const uno = listado2[0]
// const dos = listado2[1]
// etc.

const [a, b] = listado2; // que pasa si tenemos MENOS elementos que la longitud de la lista
console.log({a, b}); // coge solo los elementos que puede asignar, osea a sería posición 0 (1) y b sería posición 1 (2), los otros dos elementos de la lista no se asignarían a nada

const [c, d, e, f, j] = listado2; // que pasa si tenemos MAS elementos que la longitud de la lista
console.log({c, d, e, f, j}); // asignaria los elementos que puede asignar y el que quede sin elemento se asigna a UNDEFINED, en este caso j = undefined. 


//EJEMPLO PRACTICO en REACT
// -> Bad
const stateData = getState() // getState() es una función que te duevleuve el estado de un componente, lo devuelve un array {tiene dos componentes: valor, función que cambia el estado (setter)}
stateData [0]; // para ver el valor accedemos a la posición 0
stateData[1](valorNuevo); // para invocar a la función tenemos que declarar la posición del valor -- función setter

// -> Good 
const [valor, setValue] = getState(); // ya que getState devuelve un array lo desestructuramos directamente
console.log(valor); //hacemos un console-log del valor y así lo vemos
setValue(valorNuevo); // cambiamos el estado con setValue

// Ejemplo imagen destacada de Carrousel de Airbnb (Cosas de Juanma) no estoy segura de que nos puede aportar este ejemplo, pero aquí está
const imagenes = ['imagen1', 'imagen2', 'imagen3']; // 
const [imagenDestacada] = imagenes; // le metemos a este array el valor de la posición 0


//También se puede hacer con objetos

const cliente = {
    name: 'Victor',
    surname: 'Castillos',
}

// Queremos sacar el name y surname en una variable haciendo una copia del valor dentro de la variable
const {name, surname} = cliente;
// Y lo imprimimos
console.log(`Hola, soy ${name} ${surname}`);



// ------------------------------------------------ IMPORT / EXPORT -------------------------------------------------------------

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! podemos importar funciones no DATOS! Los dos archivos solo se comparten algunas cositas.
// los archivos secundarios SOLO SE REFERENCIAN EN EL .JS PRINCIPAL no en el HTML.
// los archivos secundarios de .js se denominan MÓDULOS

import saludar from "./exportDefault"; 
// que quieres importar y la ruta desde donde lo importas
saludar ('Carlos');

import getClient from "./exportDefault"
// para importar una funcionalidad desde otro documento js
// sentencia import, que quieres importar, no hace falta ponerle .js porque js solo puede importar otros documentos js

// al importar los datos arriba puedes llamar la función en este código
console.log(getClient()); //estamos cargando la funcion getClient() del otro documento

import { getClient, setName } from "./exportDefault"; // exportamos el objeto de exportDefault
// también podemos crear un objeto en exportEach y hacer lo mismo que hacemos con exportDefault.

// PARA HACERNOS LA VIDA MAS FACIL DEVOLVEMOS CON OBJETOS NO CON ARRAYS!!!!!!! HAY QUE TENER RESPETO A LA MUERTE Y NO COMPLICARLE LA VIDA AL PRINGADO QUE VENGA DETRÁS DE NOSOTROS A VER EL CÓDIGO

import { getClient } from "./exportEach";
import { setName } from "./exportEach";


// ------------------------------------------------ PROGRAMACIÓN FUNCIONAL -------------------------------------------------------------
// Es aquella programación que se enfoca en funciones

const numbers = [1, 2, 3, 4];

// ------ MAP --------
// ES SOLO PARA ARRAYS
// se usa mucho para hacer spread sepaartor (...)
// va a recivir una función y la va a aplicar a cada uno de los valores del array, lo devuelve en otro array.

const numberPor2 = numbers.map((valor, index) => {
    return valor * 2;
}); // devuelve un array con los valores multiplicados por 2

console.log('original', numbers);
console.log('*2 ', numberPor2);

// --> EQUIVALENTE PARA MEROS MORTALES: (lo que hacíamos hasta ahora)

const numberPor3 = [];
for( let valor of numbers) {
    numberPor3.push((valor *2));
}

console.log('original', numbers);
console.log('*2 ', numberPor3);


// ------ ForEach ---------

numbers.forEach((valor) => {
    console.log(valor)
});


// ---> Equivalente para mortales
for(let valor of numbers) {
    console.log(valor);
}

// ------- Reduce --------
// aplica una función a cada elemento con una acumulación. es un reductor, tiene un listado de elementos y va a acabar con un resultado.

const numbers2 = [1, 2, 3, 4];

const result = numbers2.reduce((prevValue, currentValue) => {
    console.log({total, currentValue});
}, 0);

//También se utiliza para strings

const letters = ['Hola', 'Santa', 'Claus'];

console.log(letters.reduce((text, characters) => `${text} ${characters}`));
// Hola Santa Claus

// ------- EXAMPLE -----------
/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
 los usuarios. */


 const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

numberOfSound = 0;
totalVolume = users.reduce((total, users) =>{
    return total + users.favoritesSounds.reduce((totalUserSound, userSound) =>{
        numberOfSounds++;

        return totalUserSound + userSound.volume;
    }, 0);
}, 0);  // mi no entender, necesito una siesta. Nos da este ejemplo pero dice que mejor hacerlo con el for. yey, unneeded information. 



// ------- Filter --------



// ------- Find ---------